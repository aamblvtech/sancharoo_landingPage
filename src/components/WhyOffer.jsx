const offers = [
  {
    title: "Live fare before booking",
    body: "Distance, time, night fare and wait-time rules are calculated before you confirm.",
  },
  {
    title: "Bike, Auto, Cab and Parcel",
    body: "Choose the vehicle that fits the trip. Parcel orders include receiver details and package weight.",
  },
  {
    title: "Simple booking flow",
    body: "Open the app, choose the service, review the fare and confirm the ride.",
  },
  {
    title: "Transparent captain rate card",
    body: "Captains can see distance slabs, night fare and waiting charges inside the Captain app.",
  },
];

export default function WhyOffer() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            What the apps support
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            Built around clear fares, useful ride choices and real captain tools.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className="group relative bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-[0_18px_40px_-15px_rgba(11,23,48,0.18)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl grid place-items-center bg-[#E6F4FF] text-[#0099FB] mb-6 font-display font-black">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
                {offer.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {offer.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
