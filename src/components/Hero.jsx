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
          <form
            id="book"
            data-testid="hero-book-ride-form"
            onSubmit={(event) => event.preventDefault()}
            className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(11,23,48,0.45)] p-6 md:p-7 border border-white/40"
          >
            <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-2xl mb-5">
              <button
                type="button"
                data-testid="hero-mode-rider"
                className="h-11 rounded-xl text-sm font-bold transition-all bg-[#0099FB] text-white shadow-[0_6px_16px_rgba(0,153,251,0.4)]"
              >
                I want a ride
              </button>
              <button
                type="button"
                data-testid="hero-mode-captain"
                className="h-11 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-800"
              >
                I want to earn
              </button>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] font-bold tracking-wide uppercase text-[#0099FB]">
                  Book a ride
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0B1730] mt-0.5">
                  Where to today?
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-2xl mb-4">
              <button
                type="button"
                data-testid="hero-service-bike"
                className="flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold transition-all bg-white text-[#0B1730] shadow-sm"
              >
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
                  className="lucide lucide-bike w-4 h-4 text-[#0099FB]"
                  aria-hidden="true"
                >
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="15" cy="5" r="1"></circle>
                  <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                </svg>
                Bike
              </button>
              <button
                type="button"
                data-testid="hero-service-cab"
                className="flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-800"
              >
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
                  className="lucide lucide-car w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                  <circle cx="7" cy="17" r="2"></circle>
                  <path d="M9 17h6"></path>
                  <circle cx="17" cy="17" r="2"></circle>
                </svg>
                Cab
              </button>
              <button
                type="button"
                data-testid="hero-service-parcel"
                className="flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-bold transition-all text-slate-500 hover:text-slate-800"
              >
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
                  className="lucide lucide-package w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                  <path d="M12 22V12"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <path d="m7.5 4.27 9 5.15"></path>
                </svg>
                Parcel
              </button>
            </div>
            <div className="space-y-3">
              <div className="relative">
                <span className="absolute inset-y-0 left-4 grid place-items-center text-slate-400">
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
                    className="lucide lucide-user w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <input
                  className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 h-12 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-[#0099FB]/40 focus-visible:border-[#0099FB] text-slate-900 placeholder:text-slate-400"
                  data-testid="lead-name-input"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 grid place-items-center text-slate-400">
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
                    className="lucide lucide-phone w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </span>
                <input
                  className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 h-12 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-[#0099FB]/40 focus-visible:border-[#0099FB] text-slate-900 placeholder:text-slate-400"
                  data-testid="lead-phone-input"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 grid place-items-center text-slate-400">
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
                    className="lucide lucide-circle-dot w-4 h-4 text-[#10B981]"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                </span>
                <input
                  className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 h-12 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-[#0099FB]/40 focus-visible:border-[#0099FB] text-slate-900 placeholder:text-slate-400"
                  data-testid="lead-pickup-input"
                  placeholder="Pickup location"
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 grid place-items-center text-slate-400">
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
                    className="lucide lucide-map-pin w-4 h-4 text-[#0099FB]"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <input
                  className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 h-12 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-[#0099FB]/40 focus-visible:border-[#0099FB] text-slate-900 placeholder:text-slate-400"
                  data-testid="lead-drop-input"
                  placeholder="Drop location"
                  type="text"
                />
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-4 grid place-items-center text-slate-400">
                  <span className="text-slate-400 text-xs font-bold">@</span>
                </span>
                <input
                  className="flex w-full border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-11 h-12 rounded-2xl bg-slate-50 border-slate-200 focus-visible:ring-2 focus-visible:ring-[#0099FB]/40 focus-visible:border-[#0099FB] text-slate-900 placeholder:text-slate-400"
                  data-testid="lead-email-input"
                  placeholder="Email (optional, for confirmation)"
                  type="email"
                />
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 px-4 py-2 w-full mt-5 h-14 rounded-2xl bg-[#0099FB] hover:bg-[#0077CC] text-white text-base font-bold shadow-[0_10px_30px_rgba(0,153,251,0.35)] hover:-translate-y-0.5 transition-all"
              type="submit"
              data-testid="hero-submit-lead-btn"
            >
              Find me a ride
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
            <p className="text-xs text-slate-500 text-center mt-3">
              By continuing, you agree to Sancharoo's
              <span className="text-[#0B1730] font-semibold">Terms</span>
              &amp;
              <span className="text-[#0B1730] font-semibold">Privacy</span>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
