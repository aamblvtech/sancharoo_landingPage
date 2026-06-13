import { useEffect, useState } from "react";
import termContent from "../../term.md?raw";
import Logo from "./Logo";

// Fallback legal templates if term.md is empty
const fallbackTemplates = {
  "terms-user": `# Terms & Conditions - User\n\nWelcome to Sancharoo. By using our application and services, you agree to these Terms & Conditions. Please read them carefully.\n\n### 1. Registration and Accounts\nTo book rides or use Sancharoo services, you must register for a personal account. You must be at least 18 years of age to create an account. You agree to maintain accurate, complete, and up-to-date information in your account. You are responsible for all activity that occurs under your account.\n\n### 2. Services and Booking\nSancharoo provides a platform connecting passengers with independent transportation providers (Captains). When booking a Bike Taxi, Cab, or Parcel delivery:\n* Fares displayed in the app are estimated and may vary based on route, traffic, and timing.\n* You agree to pay the fare displayed or calculated upon trip completion, including any applicable cancellation fees.\n* Cancellation fees may apply if you cancel a ride after a Captain has accepted and traveled towards your location.\n\n### 3. User Conduct and Rules\n* You must treat all Captains with respect and courtesy.\n* You may not use the services for any illegal or unauthorized purpose, including transporting illegal items or hazardous materials.\n* Any damage caused to a Captain's vehicle by your negligence or actions will be your sole financial responsibility.\n\n### 4. Limitation of Liability\nSancharoo is a technology platform and does not directly provide transportation services. Sancharoo is not liable for any damages, losses, or disputes arising out of the conduct of Captains or passengers during rides.`,
  "terms-captain": `# Terms & Conditions - Captain\n\nAs a Sancharoo Captain, your relationship with the platform is governed by these Terms & Conditions. By purchasing passes and accepting rides, you agree to these terms.\n\n### 1. Independent Contractor Status\nCaptains are independent service providers and not employees of Sancharoo. You retain full control over your work schedule, acceptance of rides, and routing. You are solely responsible for all operating costs, fuel, maintenance, and vehicle insurance.\n\n### 2. Sancharoo Pass Model\nUnlike traditional commission-based platforms, Sancharoo operates on a **Pass-based pricing model**:\n* Captains purchase passes (Daily, Weekly, or Monthly) to unlock unlimited or specified ride matchings.\n* Sancharoo takes 0% commission on the fares you earn while your pass is active.\n* All pass purchases are non-refundable and non-transferable.\n\n### 3. Verification & Compliance\n* You must hold a valid driver's license and all required commercial permits and vehicle registration.\n* You agree to maintain your vehicle in a safe, clean, and roadworthy condition.\n* Sancharoo reserves the right to perform background checks and suspend your account if you violate safety rules or fail to maintain high user ratings.\n\n### 4. Safety & Conduct\nYou must adhere to local traffic laws and maintain passenger safety at all times. Sancharoo has a zero-tolerance policy for driving under the influence, reckless driving, or physical misconduct.`,
  "privacy-user": `# Privacy Policy - User\n\nSancharoo is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information when you use our passenger app.\n\n### 1. Information We Collect\nWe collect information to provide and improve our services:\n* **Account Information:** Name, phone number, email address, and payment profiles.\n* **Location Data:** We collect precise or approximate location data from your mobile device when the app is open or running in the foreground to facilitate ride matching and tracking.\n* **Usage Data:** Device information, IP address, app settings, and booking history.\n\n### 2. How We Use Your Information\nWe use your information to:\n* Match you with nearby Captains for transportation or delivery.\n* Process payments and calculate trip fares.\n* Enable communication between you and your Captain.\n* Improve platform safety and customer support.\n\n### 3. Data Sharing and Disclosure\nWe share your information only when necessary:\n* We share your name, pickup/drop-off locations, and contact number with the Captain assigned to your ride.\n* We do not sell your personal data to third parties for marketing purposes.\n* We may share data if required by law enforcement or to protect the safety of our users.`,
  "privacy-captain": `# Privacy Policy - Captain\n\nThis Privacy Policy explains how Sancharoo handles the personal and location data of our Captains (drivers).\n\n### 1. Background Location Tracking\nTo operate efficiently, the Sancharoo Captain app collects real-time location data:\n* **Background Tracking:** We collect location data when the Captain app is open and your status is set to "Active" or "Online," even if the app is minimized or running in the background.\n* **Purpose:** This is essential to assign nearby passenger bookings, calculate accurate routes, and ensure user safety. Location tracking stops when you go offline.\n\n### 2. Documentation and Verifications\nWe collect and store sensitive driver information to comply with safety regulations:\n* Government-issued identification (Aadhaar, PAN, etc.).\n* Driver's license and vehicle registration (RC) details.\n* Background verification certificates and vehicle insurance records.\n\n### 3. Sharing with Passengers\nWhen you accept a booking, we share your name, photo, vehicle license plate number, vehicle model, real-time location, and contact number with the passenger to ensure they can identify your vehicle.`,
};

export default function PrivacyPage() {
  const [documents, setDocuments] = useState({});
  const [activeTab, setActiveTab] = useState("terms-user"); // terms-user, terms-captain, privacy-user, privacy-captain
  const [mode, setMode] = useState("read"); // read, edit
  const [searchText, setSearchText] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [toast, setToast] = useState(null);

  // Initialize and load documents
  useEffect(() => {
    // Parse term.md content if available, otherwise use fallbacks
    const parsed = parseMarkdown(termContent);
    const initialDocs = {};

    const ids = [
      "terms-user",
      "terms-captain",
      "privacy-user",
      "privacy-captain",
    ];
    ids.forEach((id) => {
      // Check if modified version exists in localStorage
      const local = localStorage.getItem(`sancharoo_policy_${id}`);
      if (local) {
        initialDocs[id] = local;
      } else {
        const parsedDoc = parsed.find((d) => d.id === id);
        initialDocs[id] = parsedDoc ? parsedDoc.rawText : fallbackTemplates[id];
      }
    });

    setDocuments(initialDocs);

    // Set initial tab from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");
    if (tabParam && ids.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  // Sync edit area when active tab or mode changes
  useEffect(() => {
    if (documents[activeTab]) {
      setEditedContent(documents[activeTab]);
    }
  }, [activeTab, documents]);

  // Handle browser back/forward buttons or URL query updates
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      if (tabParam && documents[tabParam]) {
        setActiveTab(tabParam);
      }
    };
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("pushstate-change", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("pushstate-change", handleUrlChange);
    };
  }, [documents]);

  // Dynamic SEO & Meta Tags update based on the active privacy tab
  useEffect(() => {
    const tabSEO = {
      "terms-user": {
        title: "Terms & Conditions for Riders | Sancharoo",
        description:
          "Read Sancharoo's rider terms and conditions. Learn about registration, fares, passenger conduct, and booking rules.",
        canonical: "https://sancharoo.com/privacy?tab=terms-user",
      },
      "terms-captain": {
        title: "Terms & Conditions for Captains | Sancharoo",
        description:
          "Review Sancharoo's Captain terms and conditions. Learn about our commission-free pass-based pricing and partner guidelines.",
        canonical: "https://sancharoo.com/privacy?tab=terms-captain",
      },
      "privacy-user": {
        title: "Privacy Policy for Riders | Sancharoo",
        description:
          "Read Sancharoo's Rider Privacy Policy. Learn how we collect, use, and protect passenger account data and location details.",
        canonical: "https://sancharoo.com/privacy?tab=privacy-user",
      },
      "privacy-captain": {
        title: "Privacy Policy for Captains | Sancharoo",
        description:
          "Read Sancharoo's Captain Privacy Policy. Learn about background location tracking, driver verification, and data safety.",
        canonical: "https://sancharoo.com/privacy?tab=privacy-captain",
      },
    };

    const seo = tabSEO[activeTab] || {
      title: "Privacy Policy & Terms | Sancharoo",
      description:
        "Read the official Terms of Service and Privacy Policies for Sancharoo Passengers and Captains.",
      canonical: "https://sancharoo.com/privacy",
    };

    document.title = seo.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute("content", seo.description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", seo.canonical);
    }

    // OG & Twitter tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", seo.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", seo.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", seo.canonical);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", seo.title);
    const twitterDesc = document.querySelector(
      'meta[name="twitter:description"]',
    );
    if (twitterDesc) twitterDesc.setAttribute("content", seo.description);
  }, [activeTab]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const parseMarkdown = (rawText) => {
    if (!rawText) return [];
    const rawSections = rawText.split(/\n---\s*\n/);
    return rawSections.map((sec) => {
      const lines = sec.trim().split("\n");
      const titleLine = lines.find((line) => line.startsWith("# "));
      const title = titleLine ? titleLine.replace("# ", "").trim() : "Untitled";

      let id = "terms-user";
      if (title.includes("Captain") && title.includes("Terms"))
        id = "terms-captain";
      else if (title.includes("User") && title.includes("Privacy"))
        id = "privacy-user";
      else if (title.includes("Captain") && title.includes("Privacy"))
        id = "privacy-captain";

      return { id, title, rawText: sec.trim() };
    });
  };

  const handleSave = () => {
    const updatedDocs = { ...documents, [activeTab]: editedContent };
    setDocuments(updatedDocs);
    localStorage.setItem(`sancharoo_policy_${activeTab}`, editedContent);
    showToast("Document saved and updated successfully!");
    setMode("read");
  };

  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to revert this document to original settings?",
      )
    ) {
      const parsed = parseMarkdown(termContent);
      const parsedDoc = parsed.find((d) => d.id === activeTab);
      const original = parsedDoc
        ? parsedDoc.rawText
        : fallbackTemplates[activeTab];

      const updatedDocs = { ...documents, [activeTab]: original };
      setDocuments(updatedDocs);
      localStorage.removeItem(`sancharoo_policy_${activeTab}`);
      setEditedContent(original);
      showToast("Document reverted to default template.", "info");
    }
  };

  const navigateToTab = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState({}, "", `/privacy?tab=${tabId}`);
    window.dispatchEvent(new Event("pushstate-change"));
    setSearchText("");
  };

  const goHome = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", "/");
    window.dispatchEvent(new Event("pushstate-change"));
  };

  // Helper to highlight terms and render simple markdown elements
  const renderFormattedContent = (markdown, keyword) => {
    if (!markdown) return "";

    // 1. Separate the first title line (e.g. # Title) so we don't render it in the body again
    const lines = markdown.split("\n");
    const bodyLines = lines[0].startsWith("# ") ? lines.slice(1) : lines;
    let text = bodyLines.join("\n").trim();

    // 2. Perform search highlights if keyword is provided
    if (keyword && keyword.trim() !== "") {
      const escapedKeyword = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex = new RegExp(`(${escapedKeyword})`, "gi");
      text = text.replace(regex, "===MARK===$1===ENDMARK===");
    }

    // 3. Escape HTML
    text = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 4. Restore highlighter marks
    text = text
      .replace(
        /===MARK===/g,
        '<mark class="bg-[#0099FB]/25 text-[#0B1730] font-semibold px-0.5 rounded">',
      )
      .replace(/===ENDMARK===/g, "</mark>");

    // 5. Convert Headers (### and ##)
    text = text.replace(
      /^### (.*?)$/gm,
      '<h3 class="text-base font-bold text-slate-800 mt-6 mb-3 font-display">$1</h3>',
    );
    text = text.replace(
      /^## (.*?)$/gm,
      '<h2 class="text-lg font-bold text-slate-800 mt-8 mb-4 font-display">$1</h2>',
    );

    // 6. Bold inline text
    text = text.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-bold text-slate-900">$1</strong>',
    );

    // 7. Render bullet points
    // Splitting by paragraphs and identifying bullet blocks
    const paragraphs = text.split(/\n\n+/);
    return paragraphs
      .map((para) => {
        const trimmed = para.trim();
        if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
          const items = trimmed.split(/\n[*+-]\s+/);
          const listHtml = items
            .map((item) => {
              const cleaned = item.replace(/^[*+-]\s+/, "").trim();
              return `<li class="relative pl-5 text-sm text-slate-600 mb-2 leading-relaxed before:absolute before:left-1.5 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#0099FB] before:rounded-full">${cleaned}</li>`;
            })
            .join("");
          return `<ul class="my-3 space-y-1">${listHtml}</ul>`;
        }
        if (trimmed.startsWith("<h")) {
          return trimmed; // Headers already converted
        }
        return `<p class="text-slate-600 text-sm leading-relaxed mb-4">${trimmed}</p>`;
      })
      .join("");
  };

  // Meta Info based on activeTab
  const getDocumentMeta = () => {
    const titles = {
      "terms-user": "Terms & Conditions - User",
      "terms-captain": "Terms & Conditions - Captain",
      "privacy-user": "Privacy Policy - User",
      "privacy-captain": "Privacy Policy - Captain",
    };

    const targetAudience = {
      "terms-user": "Passengers & Customers",
      "terms-captain": "Captains & Partners",
      "privacy-user": "Passengers & Customers",
      "privacy-captain": "Captains & Partners",
    };

    return {
      title: titles[activeTab],
      audience: targetAudience[activeTab],
      version: "v1.2.0",
      updated: "12 June 2026",
      readTime: "3 min read",
    };
  };

  const meta = getDocumentMeta();

  return (
    <div className="min-h-screen bg-[#F1F6FB] flex flex-col font-sans relative antialiased">
      <style>{`
        /* Desktop Sidebar Width Override */
        @media (min-width: 768px) {
          .md-w-80-override {
            width: 20rem !important;
          }
        }
        /* Layout and Scrolling Overrides */
        .h-screen-override {
          height: 100vh !important;
        }
        .bg-f8fafc-override {
          background-color: #f8fafc !important;
        }
        .bg-slate-50-50-override {
          background-color: rgba(248, 250, 252, 0.5) !important;
        }
        .bg-0099fb-5-override {
          background-color: rgba(0, 153, 251, 0.05) !important;
        }
        .shadow-blue-btn-override {
          box-shadow: 0 8px 20px rgba(0, 153, 251, 0.35) !important;
        }
        .shadow-blue-toast-override {
          box-shadow: 0 15px 30px rgba(0, 153, 251, 0.25) !important;
        }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-5 right-5 z-[999] animate-bounce bg-[#0B1528] text-white border border-[#0099FB]/40 px-5 py-3 rounded-xl shadow-blue-toast-override flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#0099FB]/25 flex items-center justify-center text-[#0099FB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="text-sm font-semibold">{toast.message}</p>
        </div>
      )}

      {/* Main Console Container */}
      <div className="flex-1 flex flex-col md:flex-row h-screen-override overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-full md-w-80-override bg-[#06101F] text-white flex flex-col border-r border-white/10 shrink-0">
          {/* Logo & Brand */}
          <div className="p-6 border-b border-white/10 flex items-center">
            <a href="/" onClick={goHome} className="flex items-center gap-2">
              <Logo />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow p-4 space-y-6 overflow-y-auto">
            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-3">
                Terms and Conditions
              </div>
              <nav className="space-y-1.5">
                <button
                  onClick={() => navigateToTab("terms-user")}
                  className={`w-full text-left px-4 py-3 rounded-xl flex flex-col gap-0.5 transition-all ${
                    activeTab === "terms-user"
                      ? "bg-[#0099FB] text-white shadow-blue-btn-override"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-bold">
                    Terms &amp; Conditions-User
                  </span>
                  <span className="text-[10px] text-white/50">
                    For Passengers
                  </span>
                </button>
                <button
                  onClick={() => navigateToTab("terms-captain")}
                  className={`w-full text-left px-4 py-3 rounded-xl flex flex-col gap-0.5 transition-all ${
                    activeTab === "terms-captain"
                      ? "bg-[#0099FB] text-white shadow-blue-btn-override"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-bold">
                    Terms &amp; Conditions-Captain
                  </span>
                  <span className="text-[10px] text-white/50">For Drivers</span>
                </button>
              </nav>
            </div>

            <div>
              <div className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-3">
                Privacy Policies
              </div>
              <nav className="space-y-1.5">
                <button
                  onClick={() => navigateToTab("privacy-user")}
                  className={`w-full text-left px-4 py-3 rounded-xl flex flex-col gap-0.5 transition-all ${
                    activeTab === "privacy-user"
                      ? "bg-[#0099FB] text-white shadow-blue-btn-override"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-bold">Privacy Policy-User</span>
                  <span className="text-[10px] text-white/50">
                    For Passengers
                  </span>
                </button>
                <button
                  onClick={() => navigateToTab("privacy-captain")}
                  className={`w-full text-left px-4 py-3 rounded-xl flex flex-col gap-0.5 transition-all ${
                    activeTab === "privacy-captain"
                      ? "bg-[#0099FB] text-white shadow-blue-btn-override"
                      : "text-white/75 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-bold">
                    Privacy Policy-Captain
                  </span>
                  <span className="text-[10px] text-white/50">For Drivers</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Quick Stats/Footer */}
          <div className="p-5 border-t border-white/10 text-xs text-white/45 space-y-1.5 bg-[#030913]">
            <p>System: Active</p>
            <p>Environment: Production</p>
            <p>© 2026 Sancharoo Mobility</p>
          </div>
        </aside>

        {/* Right Content Viewport */}
        <main className="flex-1 flex flex-col bg-f8fafc-override overflow-hidden">
          {/* Header Panel */}
          <header className="h-16 md:h-20 border-b border-slate-200 bg-white px-6 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-4">
              <a
                href="/"
                onClick={goHome}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-[#0099FB] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Back to Home
              </a>
            </div>
          </header>

          {/* Subheader Metadata & Filters */}
          <div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 font-display">
                {meta.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Published
                </span>
                <span>
                  Audience:{" "}
                  <strong className="text-slate-700">{meta.audience}</strong>
                </span>
                <span>•</span>
                <span>
                  Version:{" "}
                  <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700 font-mono">
                    {meta.version}
                  </code>
                </span>
                <span>•</span>
                <span>
                  Effective:{" "}
                  <strong className="text-slate-700">{meta.updated}</strong>
                </span>
              </div>
            </div>

            {/* Keyword Search (Only in Read Mode) */}
            {mode === "read" && (
              <div className="relative w-full sm:w-64">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search in document..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0099FB] focus:bg-white transition-all text-slate-700"
                />
              </div>
            )}
          </div>

          {/* Work Area */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            <div className="max-w-4xl mx-auto bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
              {mode === "read" ? (
                /* Read Layout */
                <div className="p-6 md:p-10">
                  <div
                    className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold"
                    dangerouslySetInnerHTML={{
                      __html: renderFormattedContent(
                        documents[activeTab] || "",
                        searchText,
                      ),
                    }}
                  />
                </div>
              ) : (
                /* Edit Layout (Admin Console) */
                <div className="flex flex-col">
                  {/* Warning banner */}
                  <div className="bg-0099fb-5-override border-b border-[#0099FB]/10 p-4 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0099FB]/25 text-[#0099FB] flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </span>
                    <div className="text-xs text-[#06101F]">
                      <span className="font-bold">Sandbox Mode:</span> You are
                      editing the policy in your local browser sandbox. To save
                      changes locally, click &quot;Save Changes&quot;. You can
                      always revert to the system defaults using the
                      &quot;Revert&quot; button.
                    </div>
                  </div>

                  <div className="p-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Markdown Source Content
                    </label>
                    <textarea
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      rows={18}
                      className="w-full p-4 border border-slate-200 rounded-xl font-mono text-sm focus:outline-none focus:border-[#0099FB] focus:ring-1 focus:ring-[#0099FB] bg-slate-50-50-override text-slate-800 leading-relaxed"
                    />

                    <div className="flex items-center justify-between mt-6">
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold transition-all"
                      >
                        Revert to Original Template
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setMode("read")}
                          className="px-4 py-2 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSave}
                          className="px-6 py-2 bg-[#0099FB] hover:scale-[1.02] text-white shadow-blue-btn-override rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                          </svg>
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
