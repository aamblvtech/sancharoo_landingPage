import { CAPTAIN_WEB_APP_URL } from "../seo";

const captainFacts = [
  { value: "2", label: "free rides before recharge" },
  { value: "24/7", label: "flexible rides" },
  { value: "0%", label: "commission on eligible fares" },
];

export default function EarnSection() {
  return (
    <section
      id="earn"
      data-testid="earn-section"
      className="py-20 md:py-32 bg-[#0B1730] relative overflow-hidden grain-overlay"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-4">
            Drive &amp; Earn
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Recharge once.
            <br />
            <span className="text-[#0099FB]">Ride all day.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/65 max-w-xl leading-relaxed">
            Pick the pass that fits your shift. Then drive as many rides as you
            want every rupee from every ride stays in your pocket. No
            commissions, no targets, no nonsense.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {captainFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5"
              >
                <div className="font-display text-3xl font-extrabold text-white">
                  {fact.value}
                </div>
                <div className="text-xs text-white/60 mt-1">{fact.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#pass"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#0099FB] px-8 text-base font-bold text-white shadow-[0_12px_30px_rgba(0,153,251,0.45)] transition hover:-translate-y-0.5 hover:bg-[#0077CC]"
            >
              See captain passes
            </a>
            <a
              href={CAPTAIN_WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 bg-transparent px-8 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Open Captain app
            </a>
          </div>
        </div>
        <div
          className="lg:col-span-5 relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              alt="Smiling Sancharoo Bike Taxi Captain in Bengaluru ready to drive passengers"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1777637802987-fb30ac38e58a?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHxoYXBweSUyMGluZGlhbiUyMGRyaXZlcnxlbnwwfHx8fDE3ODEwODgxMzR8MA&amp;ixlib=rb-4.1.0&amp;q=85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-md border border-white/20 grid place-items-center text-2xl">
                🛵
              </div>
              <div className="text-white">
                <div className="font-display text-lg font-bold leading-tight">
                  Ravi K.
                </div>
                <div className="font-display text-2xl font-medium text-white/70 mt-0.5">
                  Ready to drive
                </div>
              </div>
              <div className="bg-[#10B981]/30 text-[#10B981] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                Verified
              </div>
            </div>
                </div>
          <div className="hidden md:block absolute -left-8 -bottom-right bg-white text-[#0B1730] rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] animate-float">
            <div className="text-xs text-slate-500 font-semibold">
              Today's earnings
            </div>
            <div className="font-display text-2xl font-extrabold mt-30">
              ₹ 2,140
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
