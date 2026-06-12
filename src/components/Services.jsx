import bikeTaxi from '../assets/bike-sancharoo.jpeg';
import auto from '../assets/Auto.png';
import parcel from '../assets/parcel.png';
import cab from '../assets/cab.png';
export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-20 md:py-32 bg-[#F1F6FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          style={{ opacity: 1, transform: "none" }}
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
              Our services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
              Three ways to move.
              <br />
              One app for all of them.
            </h2>
          </div>
          <p className="md:max-w-sm text-slate-600 leading-relaxed">
            Whether you're nipping out for chai, sending a parcel across the
            city, or heading to a meeting — Sancharoo has the ride built for it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <a
            href="#book"
            data-testid="service-bike-card"
            className="group relative overflow-hidden rounded-3xl md:col-span-8 md:row-span-2 min-h-[300px] md:min-h-[260px] block"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="Bike Taxi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={bikeTaxi}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0099FB] to-[#0077CC] mix-blend-multiply opacity-75 group-hover:opacity-65 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  3 min ETA
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-[#0B1730] transition-transform duration-300 group-hover:-rotate-45">
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
                    className="lucide lucide-arrow-up-right w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold">
                  Bike Taxi
                </h3>
                <p className="mt-2 text-white/65 max-w-sm">
                  Book affordable bike rides in seconds and reach your destination faster with SancHaroO. Enjoy safe, reliable, and convenient travel whenever you need it.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#book"
            data-testid="service-cab-card"
            className="group relative overflow-hidden rounded-3xl md:col-span-4 min-h-[300px] md:min-h-[260px] block"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="AUTO"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={auto}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1730] to-[#1E293B] mix-blend-multiply opacity-75 group-hover:opacity-65 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  8 min ETA
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-[#0B1730] transition-transform duration-300 group-hover:-rotate-45">
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
                    className="lucide lucide-arrow-up-right w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold">
                  Auto
                </h3>
                <p className="mt-2 text-white/65
                 max-w-sm">
              Book an auto in seconds and enjoy transparent pricing, quick pickups, and smooth journeys every time.                </p>
              </div>
            </div>
          </a>
          <a
            href="#book"
            data-testid="service-cab-card"
            className="group relative overflow-hidden rounded-3xl md:col-span-4 min-h-[300px] md:min-h-[260px] block"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="cab"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={cab}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1730] to-[#1E293B] mix-blend-multiply opacity-75 group-hover:opacity-65 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  8 min ETA
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-[#0B1730] transition-transform duration-300 group-hover:-rotate-45">
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
                    className="lucide lucide-arrow-up-right w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold">
                  Cab
                </h3>
                <p className="mt-2 text-white/65 max-w-sm">
                 Book comfortable and reliable cab rides with SancHaroO. Whether it's a daily commute, airport transfer, business trip, or family outing, enjoy a safe and hassle-free journey every time.
                </p>
              </div>
            </div>
          </a>
          <a
            href="#book"
            data-testid="service-parcel-card"
            className="group relative overflow-hidden rounded-3xl md:col-span-4 min-h-[300px] md:min-h-[260px] block"
            style={{ opacity: 1, transform: "none" }}
          >
            <img
              alt="Parcel"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={parcel}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD645] to-[#F59E0B] mix-blend-multiply opacity-75 group-hover:opacity-65 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
            <div className="relative h-full p-6 md:p-8 flex flex-col justify-between text-white">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Doorstep pickup
                </span>
                <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-[#0B1730] transition-transform duration-300 group-hover:-rotate-45">
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
                    className="lucide lucide-arrow-up-right w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-extrabold">
                  Parcel
                </h3>
                <p className="mt-2 text-white/65 max-w-sm">
                  Send documents, food, gifts across town — fast.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
