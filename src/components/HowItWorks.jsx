const steps = [
  {
    title: "Set pickup and drop",
    body: "Use the Rider app to choose your route and see distance and duration.",
  },
  {
    title: "Choose Bike, Auto, Cab or Parcel",
    body: "Parcel bookings capture receiver details, package category and weight.",
  },
  {
    title: "Review the fare",
    body: "Check the fare shown in the app before confirming the booking.",
  },
  {
    title: "Book and track",
    body: "Confirm the booking, track the captain live, and follow the trip status.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      data-testid="how-section"
      className="py-20 md:py-32 bg-[#F1F6FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            How booking works
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            Every booking shows the route, fare and trip status.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((step, index) => (
            <article
              key={step.title}
              data-testid={`step-${String(index + 1).padStart(2, "0")}`}
              className="relative bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg transition-all"
            >
              <span className="absolute -top-5 right-6 font-display text-6xl font-extrabold text-[#000000]/5 leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#0B1730] text-white grid place-items-center mb-5 font-display font-black">
                {index + 1}
              </div>
              <h3 className="font-display text-xl font-bold text-[#0B1730] mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
