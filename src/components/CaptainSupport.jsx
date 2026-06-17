import { useState } from "react";
import {
  BookOpen,
  PlayCircle,
  Users,
  Headphones,
  ChevronRight,
  MessageCircle,
  Phone,
  Search,
  X,
  ExternalLink,
  CheckCircle,
  Clock,
  ArrowRight,
  Mail,
  Star,
} from "lucide-react";
import Navbar from "./Navbar";

// ─── Data ─────────────────────────────────────────────────────────────────────

const menuItems = [
  {
    id: "help-center",
    icon: BookOpen,
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
    accentBorder: "#C7D2FE",
    title: "Help Center",
    subtitle: "Browse articles and get answers",
    badge: "500+ articles",
    badgeBg: "#EEF2FF",
    badgeColor: "#4338CA",
    articles: [
      { title: "Getting started guide", time: "3 min read" },
      { title: "How to reset your password", time: "1 min read" },
      { title: "Managing your account settings", time: "4 min read" },
      { title: "Billing & subscription FAQ", time: "5 min read" },
    ],
  },
  {
    id: "video-guides",
    icon: PlayCircle,
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    accentBorder: "#DDD6FE",
    title: "Video Guides",
    subtitle: "Watch step-by-step tutorials",
    badge: "New",
    badgeBg: "#FDF4FF",
    badgeColor: "#7E22CE",
    articles: [
      { title: "Quick setup walkthrough", time: "4:32" },
      { title: "Advanced features deep dive", time: "12:10" },
      { title: "Integrations & API overview", time: "8:45" },
      { title: "Tips & tricks for power users", time: "6:20" },
    ],
  },
  {
    id: "community",
    icon: Users,
    iconBg: "#FFFBEB",
    iconColor: "#D97706",
    accentBorder: "#FDE68A",
    title: "Community",
    subtitle: "Ask questions and get help",
    badge: "12k members",
    badgeBg: "#FFFBEB",
    badgeColor: "#B45309",
    articles: [
      { title: "Introduce yourself", time: "Pinned" },
      { title: "Share your use cases", time: "Popular" },
      { title: "Feature requests & feedback", time: "Active" },
      { title: "Bug reports", time: "Active" },
    ],
  },
  {
    id: "contact-support",
    icon: Headphones,
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    accentBorder: "#A7F3D0",
    title: "Contact Support",
    subtitle: "Talk to our support team",
    badge: "~2 min wait",
    badgeBg: "#ECFDF5",
    badgeColor: "#065F46",
    articles: [
      { title: "Live chat with an agent", time: "Online now" },
      { title: "Submit a support ticket", time: "24h response" },
      { title: "Schedule a call", time: "Book slot" },
      { title: "Email support team", time: "support@app.com" },
    ],
  },
];

const faqItems = [
  {
    q: "How do I reset my password?",
    a: 'Go to the login page and click "Forgot password". Enter your email and we\'ll send a reset link within a minute.',
  },
  {
    q: "Can I change my subscription plan?",
    a: "Yes — head to Settings → Billing and choose a new plan. Changes apply immediately and are prorated automatically.",
  },
  {
    q: "How do I export my data?",
    a: "Navigate to Settings → Data → Export. You can download your data as CSV or JSON at any time.",
  },
  {
    q: "Is there a mobile app available?",
    a: "Yes, we have apps for iOS and Android. Search for our app name in the App Store or Google Play.",
  },
];

// ─── Resource Card Modal ───────────────────────────────────────────────────────

function ResourceModal({ item, onClose }) {
  if (!item) return null;
  const Icon = item.icon;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          width: "100%",
          maxWidth: 540,
          padding: "32px 32px 28px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: item.iconBg,
                border: `1.5px solid ${item.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={24} color={item.iconColor} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0F172A", letterSpacing: "-0.3px" }}>
                {item.title}
              </h3>
              <p style={{ margin: "2px 0 0", fontSize: 13, color: "#64748B" }}>{item.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: 8,
              padding: 7,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={16} color="#64748B" />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {item.articles.map((a, i) => (
            <button
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "13px 16px",
                background: "#F8FAFC",
                border: "1px solid #F1F5F9",
                borderRadius: 12,
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = item.iconBg;
                e.currentTarget.style.borderColor = item.accentBorder;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F8FAFC";
                e.currentTarget.style.borderColor = "#F1F5F9";
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500, color: "#1E293B" }}>{a.title}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <span
                  style={{
                    fontSize: 11,
                    color: "#94A3B8",
                    background: "#F1F5F9",
                    padding: "2px 8px",
                    borderRadius: 20,
                    fontWeight: 500,
                  }}
                >
                  {a.time}
                </span>
                <ExternalLink size={13} color="#CBD5E1" />
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 20,
            width: "100%",
            padding: "13px",
            background: "#1E3A8A",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            transition: "background 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1E40AF")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1E3A8A")}
        >
          View all in {item.title} →
        </button>
      </div>
    </div>
  );
}

// ─── Contact Modal ────────────────────────────────────────────────────────────

function ContactModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Please describe your issue";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  };

  const inputStyle = (key) => ({
    width: "100%",
    padding: "11px 14px",
    border: `1.5px solid ${errors[key] ? "#FCA5A5" : "#E2E8F0"}`,
    borderRadius: 10,
    fontSize: 14,
    color: "#0F172A",
    outline: "none",
    boxSizing: "border-box",
    background: errors[key] ? "#FFF5F5" : "#fff",
    fontFamily: "inherit",
  });

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 24,
          width: "100%",
          maxWidth: 480,
          padding: "32px 32px 28px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
        }}
      >
        {submitted ? (
          <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: "#ECFDF5",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <CheckCircle size={32} color="#10B981" />
            </div>
            <h4 style={{ margin: "0 0 8px", fontSize: 20, fontWeight: 700, color: "#0F172A" }}>Message sent!</h4>
            <p style={{ margin: "0 0 28px", fontSize: 14, color: "#64748B", lineHeight: 1.6 }}>
              We'll get back to you at <strong style={{ color: "#1E3A8A" }}>{form.email}</strong> within 2 hours.
            </p>
            <button
              onClick={onClose}
              style={{
                padding: "11px 32px",
                background: "#1E3A8A",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#0F172A" }}>Contact Support</h3>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748B" }}>Avg. response time: 2 minutes</p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 8,
                  padding: 7,
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Your name", key: "name", type: "text", placeholder: "Jane Smith" },
                { label: "Email address", key: "email", type: "email", placeholder: "jane@company.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => { setForm({ ...form, [key]: e.target.value }); setErrors({ ...errors, [key]: null }); }}
                    style={inputStyle(key)}
                  />
                  {errors[key] && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#EF4444" }}>{errors[key]}</p>}
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  How can we help?
                </label>
                <textarea
                  placeholder="Describe your issue in detail..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: null }); }}
                  style={{ ...inputStyle("message"), resize: "vertical", lineHeight: 1.6 }}
                />
                {errors.message && <p style={{ margin: "4px 0 0", fontSize: 12, color: "#EF4444" }}>{errors.message}</p>}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                marginTop: 20,
                width: "100%",
                padding: "13px",
                background: "#1E3A8A",
                color: "#fff",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1E40AF")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1E3A8A")}
            >
              Send message
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HelpResources() {
  const [activeModal, setActiveModal] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const selectedItem = menuItems.find((m) => m.id === activeModal);

  const filteredFaq = faqItems.filter(
    (f) =>
      search === "" ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .help-search:focus {
          border-color: #6366F1 !important;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.12) !important;
        }
        .resource-card:hover {
          box-shadow: 0 12px 32px rgba(30,58,138,0.1);
          transform: translateY(-3px);
        }
        .banner-btn-primary:hover { transform: scale(1.02); }
        .banner-channel-btn:hover { transform: translateY(-2px); }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#F8FAFF",
          fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        }}
      >
        {/* ── Navbar (external component) ── */}
        <Navbar />

        {/* ── Hero Section ── */}
        <div
          style={{
            background: "linear-gradient(160deg, #EEF2FF 0%, #F8FAFF 55%)",
            borderBottom: "1px solid #E2E8F0",
            padding: "72px 48px 68px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#fff",
              border: "1px solid #C7D2FE",
              color: "#4338CA",
              fontSize: 12,
              fontWeight: 600,
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 22,
              letterSpacing: "0.3px",
            }}
          >
            <Star size={12} fill="#4338CA" strokeWidth={0} /> Support center
          </span>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#0F172A",
              margin: "0 0 14px",
              letterSpacing: "-1px",
              lineHeight: 1.15,
            }}
          >
            How can we help you?
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#64748B",
              margin: "0 auto 36px",
              maxWidth: 460,
              lineHeight: 1.65,
            }}
          >
            Browse resources, watch guides, or talk to our team — support is always one click away.
          </p>

          {/* Search bar */}
          <div style={{ maxWidth: 520, margin: "0 auto", position: "relative" }}>
            <Search
              size={18}
              color="#94A3B8"
              style={{
                position: "absolute",
                left: 18,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
            <input
              className="help-search"
              type="text"
              placeholder="Search help articles, tutorials, FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "15px 48px 15px 50px",
                border: "1.5px solid #E2E8F0",
                borderRadius: 14,
                fontSize: 15,
                color: "#0F172A",
                outline: "none",
                background: "#fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                fontFamily: "inherit",
                transition: "border-color 0.15s, box-shadow 0.15s",
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#F1F5F9",
                  border: "none",
                  borderRadius: 6,
                  padding: 4,
                  cursor: "pointer",
                  display: "flex",
                }}
              >
                <X size={14} color="#64748B" />
              </button>
            )}
          </div>
        </div>

        {/* ── Page Body ── */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 48px 80px" }}>

          {/* Category label */}
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#94A3B8",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              margin: "0 0 18px",
            }}
          >
            Browse by category
          </p>

          {/* ── Resource Cards ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 48 }}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className="resource-card"
                  onClick={() => setActiveModal(item.id)}
                  style={{
                    background: "#fff",
                    border: "1.5px solid #E2E8F0",
                    borderRadius: 20,
                    padding: "28px 24px 24px",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    transition: "box-shadow 0.2s, border-color 0.2s, transform 0.18s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,58,138,0.1)";
                    e.currentTarget.style.borderColor = item.accentBorder;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        background: item.iconBg,
                        border: `1.5px solid ${item.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} color={item.iconColor} />
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        background: item.badgeBg,
                        color: item.badgeColor,
                        borderRadius: 20,
                        padding: "4px 10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        margin: "0 0 5px",
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0F172A",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{item.subtitle}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      color: item.iconColor,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    Explore <ChevronRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── FAQ + Right Sidebar ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 296px", gap: 24 }}>

            {/* FAQ accordion */}
            <div
              style={{
                background: "#fff",
                borderRadius: 20,
                border: "1.5px solid #E2E8F0",
                padding: "36px 40px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#94A3B8",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      margin: "0 0 4px",
                    }}
                  >
                    FAQ
                  </p>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#0F172A",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Frequently asked questions
                  </h2>
                </div>
                <span
                  style={{
                    fontSize: 12,
                    color: "#64748B",
                    background: "#F1F5F9",
                    padding: "4px 12px",
                    borderRadius: 20,
                    fontWeight: 500,
                  }}
                >
                  {filteredFaq.length} / {faqItems.length}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {filteredFaq.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    <Search size={32} color="#CBD5E1" style={{ margin: "0 auto 12px" }} />
                    <p style={{ color: "#94A3B8", fontSize: 14, margin: "0 0 6px" }}>
                      No results for{" "}
                      <strong style={{ color: "#64748B" }}>"{search}"</strong>
                    </p>
                    <button
                      onClick={() => setShowContactModal(true)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#4F46E5",
                        cursor: "pointer",
                        fontSize: 14,
                        fontWeight: 600,
                        padding: 0,
                      }}
                    >
                      Ask our support team →
                    </button>
                  </div>
                ) : (
                  filteredFaq.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        border: `1.5px solid ${openFaq === i ? "#C7D2FE" : "#F1F5F9"}`,
                        borderRadius: 12,
                        overflow: "hidden",
                        background: openFaq === i ? "#F8F7FF" : "#FAFAFA",
                        transition: "all 0.15s",
                      }}
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{
                          width: "100%",
                          padding: "15px 18px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          textAlign: "left",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#1E293B",
                            lineHeight: 1.4,
                          }}
                        >
                          {f.q}
                        </span>
                        <ChevronRight
                          size={16}
                          color={openFaq === i ? "#4F46E5" : "#94A3B8"}
                          style={{
                            transform: openFaq === i ? "rotate(90deg)" : "none",
                            transition: "transform 0.2s",
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      {openFaq === i && (
                        <p
                          style={{
                            margin: 0,
                            padding: "12px 18px 16px",
                            fontSize: 14,
                            color: "#475569",
                            lineHeight: 1.7,
                            borderTop: "1px solid #E2E8F0",
                          }}
                        >
                          {f.a}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Stats card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1.5px solid #E2E8F0",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    margin: "0 0 20px",
                  }}
                >
                  Support stats
                </p>
                {[
                  { icon: Clock, value: "~2 min", label: "Avg. response time", color: "#4F46E5", bg: "#EEF2FF" },
                  { icon: CheckCircle, value: "99.9%", label: "Uptime SLA", color: "#059669", bg: "#ECFDF5" },
                  { icon: Users, value: "50k+", label: "Happy customers", color: "#D97706", bg: "#FFFBEB" },
                ].map(({ icon: Icon, value, label, color, bg }, idx, arr) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 0",
                      borderBottom: idx < arr.length - 1 ? "1px solid #F1F5F9" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={17} color={color} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#0F172A" }}>{value}</p>
                      <p style={{ margin: 0, fontSize: 12, color: "#94A3B8" }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick contact card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  border: "1.5px solid #E2E8F0",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#94A3B8",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                  }}
                >
                  Reach us via
                </p>
                {[
                  { Icon: MessageCircle, label: "Live chat", sub: "Online now", color: "#4F46E5", bg: "#EEF2FF" },
                  { Icon: Mail, label: "Email", sub: "support@sancharoo.com", color: "#D97706", bg: "#FFFBEB" },
                  { Icon: Phone, label: "Call us", sub: "Mon–Fri, 9am–6pm", color: "#059669", bg: "#ECFDF5" },
                ].map(({ Icon, label, sub, color, bg }, idx, arr) => (
                  <button
                    key={label}
                    onClick={() => setShowContactModal(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      width: "100%",
                      padding: "11px 0",
                      background: "none",
                      border: "none",
                      borderBottom: idx < arr.length - 1 ? "1px solid #F1F5F9" : "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={17} color={color} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#1E293B" }}>{label}</p>
                      <p style={{ margin: 0, fontSize: 11, color: "#94A3B8" }}>{sub}</p>
                    </div>
                    <ChevronRight size={14} color="#CBD5E1" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── 24/7 Banner ── */}
          <div
            style={{
              marginTop: 32,
              borderRadius: 24,
              padding: "52px 56px",
              background: "#1E3A8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative blobs */}
            <div
              style={{
                position: "absolute",
                right: -60,
                top: -80,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 120,
                bottom: -100,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.12)",
                  color: "#BFDBFE",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: 20,
                  marginBottom: 18,
                  letterSpacing: "0.8px",
                }}
              >
                ALWAYS AVAILABLE
              </span>
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.5px",
                }}
              >
                We're here for you 24/7
              </h2>
              <p
                style={{
                  margin: "0 0 28px",
                  fontSize: 15,
                  color: "#93C5FD",
                  lineHeight: 1.65,
                  maxWidth: 400,
                }}
              >
                Chat or call us anytime for quick support. Average response time is under 2 minutes.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  className="banner-btn-primary"
                  onClick={() => setShowContactModal(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    background: "#fff",
                    color: "#1E3A8A",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "transform 0.15s",
                  }}
                >
                  <MessageCircle size={16} /> Contact Support
                </button>
                <button
                  onClick={() => setActiveModal("video-guides")}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                >
                  Watch guides <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Channel buttons */}
            <div style={{ display: "flex", gap: 14, position: "relative", zIndex: 1 }}>
              {[
                { Icon: MessageCircle, label: "Live chat", sub: "Online", bg: "rgba(99,102,241,0.22)" },
                { Icon: Mail, label: "Email", sub: "24h reply", bg: "rgba(249,115,22,0.22)" },
                { Icon: Phone, label: "Call", sub: "9am–6pm", bg: "rgba(16,185,129,0.22)" },
              ].map(({ Icon, label, sub, bg }) => (
                <button
                  key={label}
                  className="banner-channel-btn"
                  onClick={() => setShowContactModal(true)}
                  style={{
                    width: 94,
                    padding: "18px 12px",
                    borderRadius: 18,
                    background: bg,
                    border: "1px solid rgba(255,255,255,0.14)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 7,
                    cursor: "pointer",
                    color: "#fff",
                    transition: "transform 0.18s",
                  }}
                >
                  <Icon size={22} color="#fff" />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{label}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{sub}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Modals ── */}
      {activeModal && (
        <ResourceModal item={selectedItem} onClose={() => setActiveModal(null)} />
      )}
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </>
  );
}