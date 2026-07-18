import {
  Bike,
  CreditCard,
  FileCheck2,
  HelpCircle,
  Mail,
  Phone,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import {
  CAPTAIN_WEB_APP_URL,
  SUPPORT_EMAIL,
  SUPPORT_PHONE,
} from "../seo";
import Footer from "./Footer";
import Navbar from "./Navbar";

const supportTopics = [
  {
    icon: FileCheck2,
    title: "Onboarding documents",
    text: "Keep your driving licence, vehicle RC, profile photo, selfie and vehicle registration number ready during Captain setup.",
  },
  {
    icon: CreditCard,
    title: "Recharge and passes",
    text: "New captains get 2 free rides. After that, buy a Daily, 3-Day, Weekly or Monthly recharge in the Captain app to go online.",
  },
  {
    icon: Bike,
    title: "Vehicle and rate card",
    text: "Choose Bike, Auto or Cab during onboarding. The Captain app shows the live rate card, night fare and wait-time rules.",
  },
  {
    icon: TimerReset,
    title: "Go online status",
    text: "Check your active access status before accepting rides.",
  },
];

const faqs = [
  {
    q: "How do I start accepting rides?",
    a: "Complete Captain onboarding, verify your vehicle details, and go online from the Captain app after your free ride allowance or active recharge is available.",
  },
  {
    q: "Does Sancharoo take commission?",
    a: "Sancharoo uses a pass-based model for captains. While your eligible pass is active, Sancharoo does not deduct a per-ride commission from eligible fares.",
  },
  {
    q: "Where do I choose a recharge?",
    a: "Open the Captain app and choose the access duration that fits how often you plan to drive.",
  },
  {
    q: "Who do I contact for account or payment help?",
    a: `Email ${SUPPORT_EMAIL} or call ${SUPPORT_PHONE}. Include your registered phone number and trip or payment details if available.`,
  },
];

export default function CaptainSupport() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7f8fb] pt-28 text-slate-950">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-14 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
              Captain support
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">
              Help for onboarding, recharges and rides.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Sancharoo captains can use the Captain app for verification,
              vehicle setup, pass recharges, live rate cards and active orders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CAPTAIN_WEB_APP_URL}
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-200 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                Open Captain Web App
              </a>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                <Mail className="h-4 w-4" />
                Email support
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-950">
                  Before you go online
                </p>
                <p className="text-sm text-slate-500">
                  Keep these details ready in the Captain app.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-4">
              {supportTopics.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-slate-950">
                      {title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                Common questions
              </p>
              <h2 className="mt-3 font-display text-3xl font-black text-slate-950">
                Clear answers, no placeholder claims.
              </h2>
            </div>
            <div className="grid gap-3">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-3">
                    <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="text-base font-black text-slate-950">
                        {item.q}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black text-slate-950">
              Need direct support?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Use your registered mobile number when contacting support.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-950"
            >
              <Phone className="h-4 w-4" />
              {SUPPORT_PHONE}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-black text-white"
            >
              <Mail className="h-4 w-4" />
              {SUPPORT_EMAIL}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
