export default function EarnSection() {
  return (
    <section
      id="earn"
      data-testid="earn-section"
      className="py-20 md:py-32 bg-[#0B1730] relative overflow-hidden grain-overlay"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-[#0099FB]/30 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-[#FFD645]/15 blur-3xl"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div
          className="lg:col-span-7 text-white"
          style={{ opacity: 1, transform: "none" }}
        >
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
            want — every rupee from every ride stays in your pocket. No commissions, no targets, no nonsense.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-indian-rupee w-5 h-5 text-[#0099FB] mb-3"
                aria-hidden="true"
              >
                <path d="M6 3h12"></path>
                <path d="M6 8h12"></path>
                <path d="m6 13 8.5 8"></path>
                <path d="M6 13h3"></path>
                <path d="M9 13c6.667 0 6.667-10 0-10"></path>
              </svg>
              <div className="font-display text-2xl font-extrabold">₹1,800</div>
              <div className="text-xs text-white/60 mt-1">
                Avg. earnings / day
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clock w-5 h-5 text-[#0099FB] mb-3"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div className="font-display text-2xl font-extrabold">24/7</div>
              <div className="text-xs text-white/60 mt-1">Flexible hours</div>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trending-up w-5 h-5 text-[#0099FB] mb-3"
                aria-hidden="true"
              >
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
              <div className="font-display text-2xl font-extrabold">1.2M+</div>
              <div className="text-xs text-white/60 mt-1">
                Captains onboarded
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 py-2 h-14 px-8 rounded-full bg-[#0099FB] hover:bg-[#0077CC] text-white text-base font-bold shadow-[0_12px_30px_rgba(0,153,251,0.45)] hover:-translate-y-0.5 transition-all"
              data-testid="earn-start-cta"
            >
              See captain passes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-5 h-5 ml-2"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border shadow-sm py-2 h-14 px-8 rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white text-base font-semibold"
              data-testid="earn-learn-cta"
            >
              Learn how it works
            </button>
          </div>
        </div>
        <div
          className="lg:col-span-5 relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              alt="Sancharoo captain"
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
                <div className="text-xs text-white/70">
                  Captain on Week Pass · Bengaluru
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute -left-8 -bottom-right bg-white text-[#0B1730] rounded-2xl p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] animate-float">
            <div className="text-xs text-slate-500 font-semibold">
              Today's earnings
            </div>
            <div className="font-display text-2xl font-extrabold mt-0.5">
              ₹ 2,140
            </div>
            <div className="text-xs text-[#10B981] font-semibold mt-1">
              +18% vs yesterday
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
