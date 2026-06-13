export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-16 md:pt-20 grain-overlay"
    >
      <div className="absolute inset-0 -z-10">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1632040804304-4094a1a63be7?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxpbmRpYSUyMHN0cmVldCUyMHRyYWZmaWN8ZW58MHx8fHwxNzgxMDg4MTM1fDA&amp;ixlib=rb-4.1.0&amp;q=85"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1730]/95 via-[#0B1730]/85 to-[#0099FB]/70"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24 lg:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div
          className="lg:col-span-7 text-slate-950"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6 ">
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
              className="lucide lucide-wallet w-4 h-4 text-[#FFD645]"
              aria-hidden="true"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
            </svg>
            <span className="text-xs font-bold tracking-wide uppercase">
              Pass-based · 0% commission
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-slate-950">
            One app to
            <span className="text-[#0099FB] bg-white px-3 rounded-2xl">
              ride
            </span>
            ,
            <br />
            <span className="text-[#FFD645]">deliver</span>
            and
            <span className="text-[#FFFFFF] underline decoration-[#FFD645] decoration-4 underline-offset-4">
              earn
            </span>
            .
          </h1>
          <p className="mt-6 text-base md:text-lg text-slate-700 max-w-xl leading-relaxed">
            Book a Bike, Cab or Parcel in minutes. Or flip the switch — recharge
            a Captain Pass for the day and keep <strong className="text-slate-950">100% of every fare </strong>
            you earn.
          </p>
          {/* <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="font-display text-3xl md:text-4xl font-extrabold">
                ₹0
              </div>
              <div className="text-xs text-slate-500 leading-tight whitespace-pre-line">
                commission, ever
              </div>
            </div>
           
          </div> */}
        </div>
        <div
          className="lg:col-span-5"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="flex flex-col gap-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_30px_80px_-20px_rgba(11,23,48,0.45)] p-6 md:p-8 border border-white/40">
            <div className="text-center md:text-left">
              <h3 className="font-display text-3xl font-black text-[#0B1730] tracking-tight">
                Launch Sancharoo Apps
              </h3>
              <p className="text-sm text-slate-500 mt-1 font-semibold">
                Tap below to launch Sancharoo instantly on your browser
              </p>
            </div>

            {/* Rider Card */}
            <div className="p-1 bg-gradient-to-r from-[#0099FB]/10 to-[#0099FB]/5 rounded-2xl border border-[#0099FB]/20 transition-all hover:scale-[1.01] duration-200">
              <a
                href="https://rider.sancharoo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full py-8 px-6 text-center rounded-2xl bg-[#0099FB] hover:bg-[#008AE6] text-white shadow-[0_12px_28px_rgba(0,153,251,0.35)] transition-all group"
              >
                <span className="text-xs font-black tracking-widest uppercase bg-white/20 px-3.5 py-1 rounded-full text-white mb-3">
                  I WANT A RIDE
                </span>
                <span className="font-display text-2xl md:text-3xl font-black tracking-tight">
                  Launch Rider App
                </span>
              </a>
            </div>

            {/* Captain Card */}
            <div className="p-1 bg-gradient-to-r from-[#0B1730]/10 to-[#0B1730]/5 rounded-2xl border border-[#0B1730]/20 transition-all hover:scale-[1.01] duration-200">
              <a
                href="https://captain.sancharoo.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full py-8 px-6 text-center rounded-2xl bg-[#0B1730] hover:bg-[#15274d] text-white shadow-[0_12px_28px_rgba(11,23,48,0.3)] transition-all group"
              >
                <span className="text-xs font-black tracking-widest uppercase bg-white/10 px-3.5 py-1 rounded-full text-[#FFD645] mb-3">
                  I WANT TO EARN
                </span>
                <span className="font-display text-2xl md:text-3xl font-black tracking-tight">
                  Launch Captain App
                </span>
              </a>
            </div>

            <div className="text-center bg-slate-50 rounded-xl p-4 border border-slate-100">
              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                📲 <strong>Install App</strong>: Open either link on your mobile browser, tap the browser's menu button, and select <strong>"Add to Home Screen"</strong> to run it full-screen just like a native app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
