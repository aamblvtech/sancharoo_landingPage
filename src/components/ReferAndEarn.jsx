import { useState } from "react";
import {
  Share2,
  Bike,
  Gift,
  Wallet,
  Infinity,
  ShieldCheck,
  Download,
  ChevronDown,
  Copy,
  Info,
  Check,
} from "lucide-react";
import Navbar from "./Navbar";

// ─── Brand tokens ────────────────────────────────────────────────
const TEAL = "#0097A7";
const TEAL_DARK = "#00838F";
const TEAL_LIGHT = "#E0F7FA";
const TEXT = "#111827";
const MUTED = "#6b7280";
const BG = "#f8fbfc";



// ─── Hero ─────────────────────────────────────────────────────────
function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("SANCHAROO20").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={hero.section}>
      {/* Breadcrumb */}
      <p style={hero.breadcrumb}>
        <span style={{ color: MUTED }}>Home</span>
        <span style={{ color: MUTED }}> › </span>
        <span style={{ color: TEXT, fontWeight: 500 }}>Refer &amp; Earn</span>
      </p>

      <div style={hero.inner}>
        {/* Left copy */}
        <div style={hero.copy}>
          <h1 style={hero.h1}>Refer &amp; Earn</h1>
          <h2 style={hero.h2}>Invite Friends. Earn Rewards.</h2>
          <p style={hero.desc}>
            Share SancHaroO with your friends and earn exciting rewards when
            they take their first ride.
          </p>
          {/* <button style={hero.cta}>
            <Share2 size={16} /> Invite Friends Now
          </button> */}
        </div>

        {/* Right visual */}
        <div style={hero.visual}>
          {/* Floating referral card */}
          <div style={hero.card}>
            <p style={hero.cardLabel}>I'm using SancHaroO</p>
            <p style={hero.cardSub}>Use my code and get ₹20 off</p>
            <div style={hero.codeRow}>
              <span style={hero.code}>SANCHAROO20</span>
              <button onClick={handleCopy} style={hero.copyBtn} title="Copy code">
                {copied ? <Check size={14} color={TEAL} /> : <Copy size={14} color={TEAL} />}
              </button>
            </div>
          </div>

          {/* Brand badge */}
          <div style={hero.brand}>
            <Infinity size={32} color={TEAL} />
            <span style={hero.brandName}>SancHaroO</span>
          </div>

          {/* Share button */}
          <div style={hero.shareBtn}>
            <Share2 size={18} color="#fff" />
          </div>

          {/* Decorative dashed arrow lines */}
          <svg style={hero.arrows} viewBox="0 0 320 160" fill="none">
            <path d="M60 20 Q160 10 260 80" stroke={TEAL} strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arr)" />
            <path d="M260 80 Q200 140 60 130" stroke={TEAL} strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#arr)" />
            <defs>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={TEAL} />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

const hero = {
  section: {
    background: "linear-gradient(135deg, #f0fbfc 0%, #e8f8f9 100%)",
    padding: "127px 60px 48px",
    position: "relative",
    overflow: "hidden",
  },
  breadcrumb: { fontSize: "0.8rem", marginBottom: 20 },
  inner: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 },
  copy: { maxWidth: 420 },
  h1: { fontSize: "2.6rem", fontWeight: 900, color: TEXT, margin: "0 0 4px" },
  h2: { fontSize: "1.6rem", fontWeight: 800, color: TEAL, margin: "0 0 16px" },
  desc: { fontSize: "1rem", color: MUTED, lineHeight: 1.6, margin: "0 0 28px" },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: TEAL,
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 28px",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  },
  visual: { position: "relative", width: 340, height: 220, flexShrink: 0 },
  card: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    borderRadius: 14,
    padding: "14px 20px",
    boxShadow: "0 4px 24px rgba(0,151,167,0.15)",
    minWidth: 220,
    zIndex: 2,
  },
  cardLabel: { fontSize: "0.85rem", fontWeight: 700, color: TEXT, margin: 0 },
  cardSub: { fontSize: "0.75rem", color: MUTED, margin: "2px 0 10px" },
  codeRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: TEAL_LIGHT,
    borderRadius: 8,
    padding: "6px 12px",
  },
  code: { fontWeight: 800, fontSize: "1rem", color: TEAL, letterSpacing: 2, flex: 1 },
  copyBtn: { background: "none", border: "none", cursor: "pointer", padding: 0 },
  brand: {
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    background: "#fff",
    borderRadius: 50,
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    gap: 8,
    boxShadow: "0 2px 12px rgba(0,151,167,0.12)",
    zIndex: 2,
  },
  brandName: { fontWeight: 800, fontSize: "0.9rem", color: TEXT },
  shareBtn: {
    position: "absolute",
    top: 8,
    right: 0,
    background: TEAL,
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,151,167,0.3)",
    zIndex: 3,
  },
  arrows: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" },
};

// ─── How It Works ─────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { Icon: Share2, title: "1. Refer a Friend", desc: "Share your referral code with your friends." },
    { Icon: Bike, title: "2. Friend Takes a Ride", desc: "Your friend signs up and completes their first ride." },
    { Icon: Gift, title: "3. You Earn Rewards", desc: "You get ₹20 in your SancHaroO wallet." },
  ];

  return (
    <section style={hiw.section}>
      <h2 style={hiw.heading}>How Refer &amp; Earn Works</h2>
      <div style={hiw.underline} />
      <div style={hiw.row}>
        {steps.map(({ Icon, title, desc }, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
            <div style={hiw.step}>
              <div style={hiw.icon}>
                <Icon size={26} color="#fff" />
              </div>
              <div>
                <p style={hiw.stepTitle}>{title}</p>
                <p style={hiw.stepDesc}>{desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={hiw.arrow}>
                <svg width="60" height="20" viewBox="0 0 60 20">
                  <line x1="0" y1="10" x2="50" y2="10" stroke={TEAL} strokeWidth="1.5" strokeDasharray="5 4" />
                  <polygon points="50,5 60,10 50,15" fill={TEAL} />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const hiw = {
  section: {
    background: "#fff",
    padding: "52px 60px",
    textAlign: "center",
  },
  heading: { fontSize: "1.5rem", fontWeight: 800, color: TEXT, margin: 0 },
  underline: { width: 48, height: 3, background: TEAL, borderRadius: 4, margin: "10px auto 36px" },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
    borderRadius: 16,
    border: "1px solid #e5e7eb",
    padding: "32px 40px",
    gap: 0,
  },
  step: { display: "flex", alignItems: "flex-start", gap: 16, flex: 1 },
  icon: {
    background: TEAL,
    borderRadius: "50%",
    width: 56,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  stepTitle: { fontWeight: 700, fontSize: "1rem", color: TEXT, margin: "0 0 4px", textAlign: "left" },
  stepDesc: { fontSize: "0.85rem", color: MUTED, margin: 0, textAlign: "left", lineHeight: 1.5 },
  arrow: { padding: "0 8px", flexShrink: 0 },
};

// ─── Why Refer ────────────────────────────────────────────────────
function WhyRefer() {
  const features = [
    { Icon: Wallet, title: "Earn Real Rewards", desc: "Earn ₹20 for every friend who takes their first ride." },
    { Icon: Infinity, title: "Unlimited Referrals", desc: "Refer more friends and earn unlimited rewards." },
    { Icon: ShieldCheck, title: "Trusted by Thousands", desc: "Join thousands of happy referrers and earn more." },
  ];

  return (
    <section style={wr.section}>
      <div style={wr.left}>
        <h2 style={wr.heading}>Why Refer with SancHaroO?</h2>
        <div style={wr.underline} />
        <div style={wr.features}>
          {features.map(({ Icon, title, desc }, i) => (
            <div key={i} style={wr.feature}>
              <div style={wr.icon}>
                <Icon size={22} color={TEAL} />
              </div>
              <div>
                <p style={wr.fTitle}>{title}</p>
                <p style={wr.fDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={wr.right}>
        <div style={wr.wallet}>
          <div style={wr.walletEmoji}>💰</div>
        </div>
        <div style={wr.earn}>
          <p style={wr.earnLabel}>You Earn</p>
          <p style={wr.earnAmt}>₹20</p>
          <p style={wr.earnSub}>For Every Successful Referral</p>
          {/* <button style={wr.cta}>
            <Share2 size={15} /> Invite Friends Now
          </button> */}
        </div>
      </div>
    </section>
  );
}

const wr = {
  section: {
    display: "flex",
    gap: 32,
    padding: "52px 60px",
    background: BG,
    alignItems: "center",
  },
  left: { flex: 1 },
  heading: { fontSize: "1.3rem", fontWeight: 800, color: TEXT, margin: 0 },
  underline: { width: 40, height: 3, background: TEAL, borderRadius: 4, margin: "10px 0 28px" },
  features: { display: "flex", flexDirection: "column", gap: 24 },
  feature: { display: "flex", alignItems: "flex-start", gap: 14 },
  icon: {
    background: TEAL_LIGHT,
    borderRadius: "50%",
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  fTitle: { fontWeight: 700, fontSize: "0.95rem", color: TEXT, margin: "0 0 2px" },
  fDesc: { fontSize: "0.82rem", color: MUTED, margin: 0, lineHeight: 1.5 },
  right: {
    // flex: 0,
    minWidth: 300,
    background: TEAL_LIGHT,
    borderRadius: 20,
    padding: "32px 32px",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  wallet: {
    fontSize: 64,
    lineHeight: 1,
  },
  walletEmoji: { fontSize: 60 },
  earn: {},
  earnLabel: { fontSize: "0.85rem", color: MUTED, margin: "0 0 2px" },
  earnAmt: { fontSize: "2.8rem", fontWeight: 900, color: TEAL, margin: "0 0 4px" },
  earnSub: { fontSize: "0.85rem", color: TEXT, fontWeight: 500, margin: "0 0 16px" },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: TEAL,
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "10px 18px",
    fontWeight: 700,
    fontSize: "0.875rem",
    cursor: "pointer",
  },
};

// ─── Info Banner ──────────────────────────────────────────────────
function InfoBanner() {
  return (
    <div style={ib.banner}>
      <Info size={20} color={TEAL} style={{ flexShrink: 0 }} />
      <div>
        <p style={ib.title}>Your friend also gets ₹50 OFF on their first ride!</p>
        <p style={ib.sub}>It's a win-win for both of you.</p>
      </div>
    </div>
  );
}

const ib = {
  banner: {
    display: "flex",
    alignItems: "flex-start",
    gap: 14,
    background: TEAL_LIGHT,
    borderRadius: 12,
    padding: "18px 60px",
    margin: "0 60px 48px",
  },
  title: { fontWeight: 700, color: TEXT, margin: 0, fontSize: "0.95rem" },
  sub: { fontSize: "0.82rem", color: MUTED, margin: "2px 0 0" },
};

// ─── Root component ───────────────────────────────────────────────
export default function ReferAndEarn() {
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: BG, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyRefer />
      <InfoBanner />
    </div>
  );
}