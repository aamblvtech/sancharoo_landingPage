export default function WhyOffer() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mb-14"
          style={{ opacity: 1, transform: "none" }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            What we offer
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            Built for the way India actually moves.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            data-testid="offer-quick-card"
            className="group relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-[0_18px_40px_-15px_rgba(11,23,48,0.18)] hover:-translate-y-1 transition-all duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-[#E6F4FF] text-[#0099FB] mb-6 transition-transform duration-300 group-hover:rotate-6">
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
                className="lucide lucide-zap w-7 h-7"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Quick Pickup
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Captains within minutes — no more waiting around.
            </p>
          </div>
          <div
            data-testid="offer-fares-card"
            className="group relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-[0_18px_40px_-15px_rgba(11,23,48,0.18)] hover:-translate-y-1 transition-all duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-[#FEF3C7] text-[#F59E0B] mb-6 transition-transform duration-300 group-hover:rotate-6">
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
                className="lucide lucide-indian-rupee w-7 h-7"
                aria-hidden="true"
              >
                <path d="M6 3h12"></path>
                <path d="M6 8h12"></path>
                <path d="m6 13 8.5 8"></path>
                <path d="M6 13h3"></path>
                <path d="M9 13c6.667 0 6.667-10 0-10"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Honest Fares
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Riders pay less. Captains keep 100%. Win-win.
            </p>
          </div>
          <div
            data-testid="offer-reach-card"
            className="group relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-[0_18px_40px_-15px_rgba(11,23,48,0.18)] hover:-translate-y-1 transition-all duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-[#D1FAE5] text-[#10B981] mb-6 transition-transform duration-300 group-hover:rotate-6">
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
                className="lucide lucide-map-pinned w-7 h-7"
                aria-hidden="true"
              >
                <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                <circle cx="12" cy="8" r="2"></circle>
                <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Bike · Cab · Parcel
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Three services. One ride-hailing app for everything.
            </p>
          </div>
          <div
            data-testid="offer-safe-card"
            className="group relative bg-white rounded-3xl border border-slate-200 p-7 hover:shadow-[0_18px_40px_-15px_rgba(11,23,48,0.18)] hover:-translate-y-1 transition-all duration-300"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-slate-100 text-[#0B1730] mb-6 transition-transform duration-300 group-hover:rotate-6">
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
                className="lucide lucide-shield-check w-7 h-7"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
              Safety First
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Verified captains, live tracking and SOS on every trip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
