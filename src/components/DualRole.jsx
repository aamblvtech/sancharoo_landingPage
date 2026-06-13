export default function DualRole() {
  return (
    <section
      id="dual"
      data-testid="dual-section"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 dot-grid opacity-60"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div
          className="lg:col-span-6"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            One identity
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-[1.05]">
            Rider going out.
            <br />
            <span className="text-[#0099FB]">Captain coming back.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            With Sancharoo, you don't have to choose. Book a ride on your way to
            work. Switch to{" "}
            <strong className="text-[#0B1730]">Captain mode</strong> on your
            ride home and earn from passengers headed your way. Same app. Same
            wallet. Same you.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E6F4FF] text-[#0099FB] grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left-right w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M8 3 4 7l4 4"></path>
                  <path d="M4 7h16"></path>
                  <path d="m16 21 4-4-4-4"></path>
                  <path d="M20 17H4"></path>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1730]">
                  Switch modes in one tap
                </div>
                <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                  No two apps, no separate accounts. Toggle Rider ↔ Captain
                  instantly.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E6F4FF] text-[#0099FB] grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wallet w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1730]">
                  One unified wallet
                </div>
                <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                  Earnings from rides automatically credit ride balance for your
                  next trip.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E6F4FF] text-[#0099FB] grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-refresh-ccw w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 16h5v5"></path>
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-[#0B1730]">
                  No daily targets
                </div>
                <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                  Drive a single ride or fifty. Pass is paid — the rest is up to
                  you.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:col-span-6 relative"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#0099FB] to-[#0077CC] shadow-[0_30px_80px_-20px_rgba(0,153,251,0.55)]"></div>
            <div className="absolute inset-6 rounded-[1.5rem] bg-white p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Mode
                  </div>
                  <div className="font-display text-2xl font-extrabold text-[#0B1730] mt-0.5">
                    Captain
                  </div>
                </div>
                <div className="bg-[#10B981]/10 text-[#10B981] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  Online
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Today's earnings
                </div>
                <div className="font-display text-4xl font-extrabold text-[#0B1730] mt-1">
                  ₹ 2,140
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#0099FB]"></div>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">
                    12 / 16 rides
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-2xl">
                <div className="flex-1 py-2.5 text-center text-xs font-bold bg-[#0099FB] text-white rounded-xl shadow">
                  Captain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
