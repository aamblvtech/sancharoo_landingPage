import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Download() {
  return (
    <section
      id="download"
      data-testid="download-section"
      className="py-20 md:py-32 bg-[#F1F6FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0099FB] to-[#0077CC] p-8 md:p-16 grain-overlay"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#FFD645]/30 blur-3xl"
          ></div>
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/85 mb-4">
                Download the app
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                The city moves faster with
                <br />
                <span className="text-[#FFD645]">sancharoo</span> in your
                pocket.
              </h2>
              <p className="mt-5 text-white/90 max-w-lg">
                Book bikes, cabs and parcels. Switch to captain in a tap. Track
                every rupee. All in one tiny app.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
  href="#"
  className="group inline-flex items-center gap-4 bg-[#0B1730] hover:bg-black text-white rounded-2xl px-6 h-16 transition-all"
>
  <i className="fa-brands fa-google-play text-3xl"></i>

  <div className="text-left">
    <div className="text-[10px] uppercase tracking-wider text-white/70">
      Coming Soon On
    </div>

    <div className="font-bold text-xl">
      Google Play
    </div>
  </div>
</a>
                <a
  href="#"
  className="group inline-flex items-center gap-4 bg-white text-[#0B1730] rounded-2xl px-6 h-16 hover:shadow-xl transition-all"
>
  <i className="fa-brands fa-app-store-ios text-3xl"></i>

  <div className="text-left">
    <div className="text-[10px] uppercase tracking-wider text-slate-500">
      Coming Soon On
    </div>

    <div className="font-bold text-xl">
      App Store
    </div>
  </div>
</a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-white/90">
                <div className="flex">
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
                    className="lucide lucide-star w-4 h-4 fill-[#FFD645] text-[#FFD645]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
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
                    className="lucide lucide-star w-4 h-4 fill-[#FFD645] text-[#FFD645]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
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
                    className="lucide lucide-star w-4 h-4 fill-[#FFD645] text-[#FFD645]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
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
                    className="lucide lucide-star w-4 h-4 fill-[#FFD645] text-[#FFD645]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
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
                    className="lucide lucide-star w-4 h-4 fill-[#FFD645] text-[#FFD645]"
                    aria-hidden="true"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                </div>
                <div className="text-sm font-semibold">4.8</div>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.4rem] border-[10px] border-[#0B1730] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-float">
                <div className="absolute inset-x-0 top-0 h-6 bg-[#0B1730] flex items-center justify-center">
                  <div className="w-20 h-1 rounded-full bg-black/40"></div>
                </div>
                <div className="pt-10 px-5">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">
                    Good morning
                  </div>
                  <div className="font-display text-xl font-extrabold text-[#0B1730]">
                    Where to?
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                      <span className="text-xs text-slate-700 font-semibold">
                        Home
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0099FB]"></span>
                      <span className="text-xs text-slate-700 font-semibold">
                        Indiranagar Metro
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="rounded-xl p-2.5 bg-[#0B1730] text-white">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Bike
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹48
                      </div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-slate-100 text-slate-700">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Cab
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹180
                      </div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-slate-100 text-slate-700">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Parcel
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹65
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-[#0099FB] text-white text-center rounded-xl py-2.5 text-xs font-bold tracking-wide">
                    BOOK BIKE · 3 MIN AWAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
