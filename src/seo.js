export const SITE_URL = "https://sancharoo.com";
export const SITE_NAME = "Sancharoo";
export const COMPANY_NAME = "Aamblv Technologies Pvt. Ltd.";
export const SUPPORT_EMAIL = "aamblvtech@gmail.com";
export const SUPPORT_PHONE = "+91 80083 03742";
export const RIDER_WEB_APP_URL = "https://rider.sancharoo.in";
export const CAPTAIN_WEB_APP_URL = "https://captain.sancharoo.in";
export const RIDER_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.rider.sancharoo&pcampaignid=web_share";
export const CAPTAIN_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sancharoos.captain&pcampaignid=web_share";

export const routeMeta = {
  "/": {
    title: "Sancharoo | Bike Taxi, Auto, Cab and Parcel Delivery",
    description:
      "Book Bike, Auto, Cab and Parcel, or start driving with Sancharoo.",
    canonical: `${SITE_URL}/`,
  },
  "/contact": {
    title: "Contact Sancharoo | Rider, Captain and Business Support",
    description:
      "Contact Sancharoo for rider support, captain support, partnerships, and mobility business enquiries.",
    canonical: `${SITE_URL}/contact`,
  },
  "/captain-support": {
    title: "Captain Support | Sancharoo",
    description:
      "Get Sancharoo captain support for onboarding, pass plans, ride issues, payments, and account help.",
    canonical: `${SITE_URL}/captain-support`,
  },
  "/refer-and-earn": {
    title: "Refer and Earn | Sancharoo Rewards",
    description: "Invite friends to Sancharoo from the Rider app.",
    canonical: `${SITE_URL}/refer-and-earn`,
  },
};

const setMeta = (selector, attr, value) => {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attr, value);
};

const setLink = (rel, href) => {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

export function applySeo(meta) {
  const page = meta || routeMeta["/"];
  document.title = page.title;
  setMeta('meta[name="description"]', "content", page.description);
  setMeta('meta[name="robots"]', "content", "index, follow");
  setLink("canonical", page.canonical);
  setMeta('meta[property="og:title"]', "content", page.title);
  setMeta('meta[property="og:description"]', "content", page.description);
  setMeta('meta[property="og:url"]', "content", page.canonical);
  setMeta('meta[property="og:type"]', "content", "website");
  setMeta('meta[name="twitter:title"]', "content", page.title);
  setMeta('meta[name="twitter:description"]', "content", page.description);
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    email: SUPPORT_EMAIL,
    telephone: SUPPORT_PHONE,
    sameAs: ["https://www.instagram.com/sancharoo_"],
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function buildSoftwareSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "TravelApplication",
    operatingSystem: "Android, Web",
    description:
      "Sancharoo helps users book bike taxi, auto, cab, and parcel delivery services while captains earn through pass plans.",
    url: SITE_URL,
    downloadUrl: [RIDER_PLAY_STORE_URL, CAPTAIN_PLAY_STORE_URL],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };
}
