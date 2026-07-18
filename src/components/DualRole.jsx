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
        <div className="lg:col-span-6">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099FB] mb-3">
            Rider and Captain apps
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-[1.05]">
            One brand.
            <br />
            <span className="text-[#0099FB]">Two focused experiences.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
            The Rider app handles trips and parcel bookings. The Captain app
            handles onboarding, verification, recharges, rate cards, orders,
            and earnings.
          </p>
          <div className="mt-8 space-y-4">
            {[
              {
                title: "Rider app",
                body: "Book bike, auto, cab and parcel orders with route distance, duration and fare before booking.",
              },
              {
                title: "Captain app",
                body: "Captains add vehicle details, driving licence, RC and profile details before accepting orders.",
              },
              {
                title: "No daily target",
                body: "No daily target for captains to complete.",
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E6F4FF] text-[#0099FB] grid place-items-center font-display font-black">
                  +
                </div>
                <div>
                  <div className="font-display font-bold text-[#0B1730]">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-600 leading-relaxed mt-0.5">
                    {item.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] bg-gradient-to-br from-[#0099FB] to-[#0077CC] p-6 shadow-[0_30px_80px_-20px_rgba(0,153,251,0.55)]">
            <div className="h-full rounded-[1.5rem] bg-white p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Captain app
                  </div>
                  <div className="font-display text-2xl font-extrabold text-[#0B1730] mt-0.5">
                    Access status
                  </div>
                </div>
                <div className="bg-[#10B981]/10 text-[#10B981] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  Online
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Trial access
                </div>
                <div className="font-display text-4xl font-extrabold text-[#0B1730] mt-1">
                  2 free rides
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Recharge after trial to continue accepting rides.
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-bold">
                <div className="rounded-xl bg-[#E6F4FF] px-3 py-3 text-[#0099FB]">
                  Rate card
                </div>
                <div className="rounded-xl bg-[#FEF3C7] px-3 py-3 text-[#92400E]">
                  Ride requests
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
