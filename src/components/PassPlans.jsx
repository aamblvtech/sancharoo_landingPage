import { CAPTAIN_WEB_APP_URL } from "../seo";

const passes = [
  {
    label: "Daily",
    title: "1-day pass",
    note: "Use it for one day of driving.",
    detail: "1 day access",
    accent: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
  },
  {
    label: "3 Days",
    title: "3-day pass",
    note: "Drive for a short stretch.",
    detail: "3 days access",
    accent: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
  },
  {
    label: "Weekly",
    title: "7-day pass",
    note: "Stay active through the week.",
    detail: "7 days access",
    accent: "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]",
  },
  {
    label: "Monthly",
    title: "30-day pass",
    note: "Best for regular captains.",
    detail: "30 days access",
    accent: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
  },
];

export default function PassPlans() {
  return (
    <section
      id="pass"
      data-testid="pass-section"
      className="py-20 md:py-32 bg-[#F1F6FB] relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#0099FB]/10 blur-3xl -z-0"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 mb-5">
            <span className="text-xs font-bold tracking-wide uppercase text-[#0B1730]">
              Captain recharge
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1730] tracking-tight leading-tight">
            Captain pass plans
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate-600">
            Get 2 free rides first. Then choose a pass to continue accepting
            rides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {passes.map((pass) => (
            <article
              key={pass.label}
              className="group relative overflow-hidden rounded-[1.75rem] bg-white border border-slate-200 p-6 shadow-[0_18px_60px_-35px_rgba(11,23,48,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-36px_rgba(11,23,48,0.45)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[#0099FB] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div
                className={`inline-flex border rounded-xl px-3 py-1 text-xs font-black uppercase tracking-wider ${pass.accent}`}
              >
                {pass.label}
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold text-[#0B1730]">
                {pass.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {pass.note}
              </p>
              <div className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">
                {pass.detail}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-white border border-slate-200 p-6">
            <div className="font-display font-bold text-[#0B1730]">
              0% commission
            </div>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Keep eligible ride fares while your pass is active.
            </p>
          </div>
          
        </div>

        <div className="mt-10 text-center ">
          <a
            href={CAPTAIN_WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B1730] px-8 font-bold text-white transition hover:bg-black"
          >
            Open Captain Web App
          </a>
        </div>
      </div>
    </section>
  );
}
