export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="how-section"
      className="py-20 md:py-32 bg-[#F1F6FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mb-14"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            How it works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            From “I need to go” to “I just arrived” — in four taps.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div
            data-testid="step-01"
            className="relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-lg transition-all"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute -top-5 right-6 font-display text-6xl font-extrabold text-[#000000] leading-none select-none">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B1730] text-white grid place-items-center mb-5">
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
                className="lucide lucide-smartphone w-6 h-6"
                aria-hidden="true"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
            </div>
            <div className="text-xs font-bold text-[#0099FB] tracking-wider mb-2">
              STEP
              <span style={{ display: "contents" }}>01</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Open the app
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sign up in seconds with your phone number.
            </p>
          </div>
          <div
            data-testid="step-02"
            className="relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-lg transition-all"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute -top-5 right-6 font-display text-6xl font-extrabold text-[#000000]/5 leading-none select-none">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B1730] text-white grid place-items-center mb-5">
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
                className="lucide lucide-map-pin w-6 h-6"
                aria-hidden="true"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="text-xs font-bold text-[#0099FB] tracking-wider mb-2">
              STEP
              <span style={{ display: "contents" }}>02</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Pick your service
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Bike, Cab or Parcel — choose pickup &amp; drop.
            </p>
          </div>
          <div
            data-testid="step-03"
            className="relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-lg transition-all"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute -top-5 right-6 font-display text-6xl font-extrabold text-[#000000]/5 leading-none select-none">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B1730] text-white grid place-items-center mb-5">
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
                className="lucide lucide-navigation w-6 h-6"
                aria-hidden="true"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
            </div>
            <div className="text-xs font-bold text-[#0099FB] tracking-wider mb-2">
              STEP
              <span style={{ display: "contents" }}>03</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Meet your captain
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Track in real-time. They reach you within minutes.
            </p>
          </div>
          <div
            data-testid="step-04"
            className="relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-lg transition-all"
            style={{ opacity: 1, transform: "none" }}
          >
            <span className="absolute -top-5 right-6 font-display text-6xl font-extrabold text-[#000000]/5 leading-none select-none">
              04
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0B1730] text-white grid place-items-center mb-5">
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
                className="lucide lucide-star w-6 h-6"
                aria-hidden="true"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <div className="text-xs font-bold text-[#0099FB] tracking-wider mb-2">
              STEP
              <span style={{ display: "contents" }}>04</span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Ride. Rate. Repeat.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pay seamlessly and rate your trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
