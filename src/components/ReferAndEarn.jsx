import { Copy, Gift, Share2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { RIDER_WEB_APP_URL } from "../seo";

const steps = [
  {
    title: "Share your invite code",
    body: "Every rider and captain can share their Sancharoo referral code.",
  },
  {
    title: "Friend signs up and rides",
    body: "The friend applies your code during registration and completes their first ride.",
  },
  {
    title: "Rewards appear in the app",
    body: "Referral rewards are shown inside Sancharoo after the required ride is completed.",
  },
];

export default function ReferAndEarn() {
  return (
    <div className="min-h-screen bg-[#F8FBFC]">
      <Navbar />
      <main>
        <section className="pt-36 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-4">
                Refer &amp; Earn
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
                Invite friends to Sancharoo.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Share Sancharoo with people who need simple ride and parcel
                booking from the app or web.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={RIDER_WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0099FB] px-6 font-bold text-white transition hover:bg-[#008AE6]"
                >
                  Open Rider Web App
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            <aside className="lg:col-span-5 rounded-2xl border border-slate-200 bg-[#F1F6FB] p-6">
              <div className="rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(11,23,48,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#E6F4FF] text-[#0099FB]">
                    <Gift size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Example reward
                    </div>
                    <div className="font-display text-2xl font-extrabold text-[#0B1730]">
                      Share your code
                    </div>
                  </div>
                </div>
                <div className="mt-5 rounded-xl bg-[#F8FBFC] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-lg font-black tracking-wider text-[#0B1730]">
                      YOURCODE
                    </span>
                    <Copy size={18} className="text-[#0099FB]" />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-5">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#0B1730] font-display font-black text-white">
                    {index + 1}
                  </div>
                  <h2 className="font-display text-xl font-bold text-[#0B1730]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#E6F4FF] p-6 flex flex-col md:flex-row md:items-center gap-4">
              <Gift className="shrink-0 text-[#0099FB]" size={28} />
              <div>
                <h2 className="font-display text-xl font-bold text-[#0B1730]">
                  Keep sharing simple.
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Use the Rider app to share your invite code and help friends
                  start booking faster.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
