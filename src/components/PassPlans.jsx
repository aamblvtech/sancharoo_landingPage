export default function PassPlans() {
  return (
    <section
      id="pass"
      data-testid="pass-section"
      className="py-20 md:py-32 bg-[#F1F6FB] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0099FB]/10 blur-3xl -z-0"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 mb-5">
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
              className="lucide lucide-sparkles w-4 h-4 text-[#FFD645]"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <span className="text-xs font-bold tracking-wide uppercase text-[#0B1730]">
              The Sancharoo Difference
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            Pay once a day.
            <br />
            Keep <span className="text-[#0099FB]">every rupee</span> after that.
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600">
            No commissions. No per-ride cuts. Just a flat recharge — and the
            road is yours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            data-testid="pass-day-card"
            className="relative rounded-3xl p-8 bg-white text-[#0B1730] border border-slate-200 shadow-[0_10px_40px_-15px_rgba(11,23,48,0.1)]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#0099FB]">
              Day Pass
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-400">₹</span>
              <span className="font-display text-6xl font-extrabold tracking-tight">
                30
              </span>
              <span className="text-base font-semibold text-slate-500">
                /day
              </span>
            </div>
            <div className="text-sm mt-2 text-slate-500">
              Try the road. Today.
            </div>
            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">
                  Unlimited rides for 24 hours
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">
                  0% commission on every fare
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">
                  Live priority ride matching
                </span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">Withdraw anytime to UPI</span>
              </li>
            </ul>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow px-4 py-2 w-full mt-8 h-12 rounded-full font-bold transition-all hover:-translate-y-0.5 bg-[#0B1730] hover:bg-black text-white"
              data-testid="pass-day-cta"
            >
              Activate day pass
            </button>
          </div>
          <div
            data-testid="pass-week-card"
            className="relative rounded-3xl p-8 bg-[#0B1730] text-white shadow-[0_30px_80px_-20px_rgba(11,23,48,0.55)] md:-translate-y-4"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFD645] text-[#0B1730] text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full">
              Most popular
            </span>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0099FB]">
              Week Pass
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white/70">₹</span>
              <span className="font-display text-6xl font-extrabold tracking-tight">
                179
              </span>
              <span className="text-base font-semibold text-white/70">
                /week
              </span>
            </div>
            <div className="text-sm mt-2 text-white/75">
              The captains' favourite.
            </div>
            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#0099FB] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-white/90">Everything in Day Pass</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#0099FB] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-white/90">Saves ₹24 vs daily</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#0099FB] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-white/90">Weekly bonus on 50+ rides</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#0099FB] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-white/90">Fuel partner discounts</span>
              </li>
            </ul>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full mt-8 h-12 rounded-full font-bold transition-all hover:-translate-y-0.5 bg-[#0099FB] hover:bg-[#0077CC] text-white shadow-[0_10px_24px_rgba(0,153,251,0.5)]"
              data-testid="pass-week-cta"
            >
              Start week pass
            </button>
          </div>
          <div
            data-testid="pass-month-card"
            className="relative rounded-3xl p-8 bg-white text-[#0B1730] border border-slate-200 shadow-[0_10px_40px_-15px_rgba(11,23,48,0.1)]"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="text-xs font-bold uppercase tracking-wider text-[#0099FB]">
              Month Pass
            </div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-400">₹</span>
              <span className="font-display text-6xl font-extrabold tracking-tight">
                599
              </span>
              <span className="text-base font-semibold text-slate-500">
                /month
              </span>
            </div>
            <div className="text-sm mt-2 text-slate-500">
              For full-time captains.
            </div>
            <ul className="mt-7 space-y-3">
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">Everything in Week Pass</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">Saves ₹271 vs daily</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">Premium tier rides</span>
              </li>
              <li className="flex gap-3 items-start text-sm">
                <span className="shrink-0 w-5 h-5 rounded-full grid place-items-center mt-0.5 bg-[#E6F4FF] text-[#0099FB]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </span>
                <span className="text-slate-700">
                  Captain insurance &amp; SOS
                </span>
              </li>
            </ul>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow px-4 py-2 w-full mt-8 h-12 rounded-full font-bold transition-all hover:-translate-y-0.5 bg-[#0B1730] hover:bg-black text-white"
              data-testid="pass-month-cta"
            >
              Go full-time
            </button>
          </div>
        </div>
        <p className="text-center text-sm text-slate-500 mt-10">
          All plans include captain support, real-time GPS, daily payouts and
          ride insurance up to ₹5L.
        </p>
      </div>
    </section>
  );
}
