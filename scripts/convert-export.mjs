import fs from "node:fs";
import path from "node:path";
import { parse } from "parse5";

const root = process.cwd();
const source = fs.readFileSync(path.join(root, "index.html"), "utf8");
const document = parse(source);

const componentNames = {
  Navbar: "Navbar",
  Hero: "Hero",
  Services: "Services",
  DualRole: "DualRole",
  EarnSection: "EarnSection",
  PassPlans: "PassPlans",
  WhyOffer: "WhyOffer",
  HowItWorks: "HowItWorks",
  Download: "Download",
  Footer: "Footer",
};

const attributeNames = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  colspan: "colSpan",
  rowspan: "rowSpan",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
};

const voidElements = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const ignoredAttributes = new Set(["cz-shortcut-listen", "data-ve-dynamic"]);

const booleanAttributes = new Set([
  "allowFullScreen",
  "async",
  "autoFocus",
  "autoPlay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formNoValidate",
  "hidden",
  "loop",
  "multiple",
  "muted",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "selected",
]);

function findNode(node, predicate) {
  if (predicate(node)) return node;

  for (const child of node.childNodes ?? []) {
    const match = findNode(child, predicate);
    if (match) return match;
  }

  return null;
}

function getAttribute(node, name) {
  return node.attrs?.find((attribute) => attribute.name === name)?.value;
}

function escapeText(value) {
  return value
    .replaceAll("Â©", "©")
    .replaceAll("â€”", "—")
    .replaceAll("â€“", "–")
    .replaceAll("â€¢", "•")
    .replaceAll("Â·", "·")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;");
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function camelCaseStyleName(name) {
  if (name.startsWith("--")) return name;

  return name
    .replace(/^-(ms)-/, "$1-")
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function styleToJsx(value) {
  const declarations = value
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split(";")
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .map((declaration) => {
      const separator = declaration.indexOf(":");
      const property = camelCaseStyleName(
        declaration.slice(0, separator).trim(),
      );
      const rawValue = declaration.slice(separator + 1).trim();
      const key = property.startsWith("--")
        ? JSON.stringify(property)
        : property;
      const valueExpression = /^-?\d+(\.\d+)?$/.test(rawValue)
        ? rawValue
        : JSON.stringify(rawValue);
      return `${key}: ${valueExpression}`;
    });

  return `{{ ${declarations.join(", ")} }}`;
}

function serializeAttributes(node) {
  return (node.attrs ?? [])
    .filter(({ name }) => {
      return (
        !name.startsWith("x-") &&
        !name.startsWith("village-") &&
        !ignoredAttributes.has(name)
      );
    })
    .map(({ name, value }) => {
      const jsxName = attributeNames[name] ?? name;

      if (node.tagName === "input" && name === "value" && value === "") {
        return "";
      }
      if (name === "style") return ` style=${styleToJsx(value)}`;
      if (value === "" && booleanAttributes.has(jsxName)) return ` ${jsxName}`;
      if (value === "") return ` ${jsxName}=""`;

      return ` ${jsxName}="${escapeAttribute(value)}"`;
    })
    .join("");
}

function serializeNode(node) {
  if (node.nodeName === "#text") return escapeText(node.value);
  if (node.nodeName === "#comment") return "";
  if (!node.tagName) return "";

  const tagName = node.tagName;
  const attributes = serializeAttributes(node);

  if (voidElements.has(tagName)) return `<${tagName}${attributes} />`;

  const children = (node.childNodes ?? []).map(serializeNode).join("");
  return `<${tagName}${attributes}>${children}</${tagName}>`;
}

function findComponentRoot(name) {
  return findNode(
    document,
    (node) => getAttribute(node, "x-file-name") === name,
  );
}

function extractStyles() {
  const styles = [];

  function collect(node) {
    if (node.tagName === "style") {
      const css = node.childNodes?.map((child) => child.value ?? "").join("");
      if (css?.trim()) styles.push(css);
    }

    for (const child of node.childNodes ?? []) collect(child);
  }

  collect(document);

  return styles
    .filter((css) => !css.includes("village-paths-availability"))
    .join("\n")
    .replaceAll("Â©", "©");
}

fs.mkdirSync(path.join(root, "src", "components"), { recursive: true });
fs.mkdirSync(path.join(root, "src", "styles"), { recursive: true });

for (const [sourceName, componentName] of Object.entries(componentNames)) {
  const node = findComponentRoot(sourceName);

  if (!node) {
    throw new Error(`Could not locate ${sourceName} in the HTML export.`);
  }

  const jsx = serializeNode(node);
  const file = `export default function ${componentName}() {\n  return (\n${jsx}\n  );\n}\n`;
  fs.writeFileSync(
    path.join(root, "src", "components", `${componentName}.jsx`),
    file,
  );
}

fs.writeFileSync(
  path.join(root, "src", "styles", "global.css"),
  extractStyles(),
);
