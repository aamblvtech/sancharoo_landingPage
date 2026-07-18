import { Phone, Mail, CheckCircle } from "lucide-react";
import { SUPPORT_EMAIL, SUPPORT_PHONE } from "../seo";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#F1F6FB]">
      <Navbar />
    <section className="min-h-screen  py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[32px]  shadow-[0_20px_60px_rgba(11,23,48,0.08)]">

          {/* LEFT SIDE */}

          <div className=" p-12 lg:p-16 border-r border-slate-200">

            <p className="uppercase tracking-[0.25em] text-[#0099FB] text-sm font-semibold">
              Contact Us
            </p>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-[#0B1730] leading-tight">
              Let's talk about your next project
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Reach out to AAMBLV Technologies for support,
              partnerships, mobility solutions, or business enquiries.
            </p>

            <div className="mt-10 space-y-4">

              {[
                "Business Enquiries",
                "Technical Support",
                "Partnership Opportunities",
                "Mobility & Technology Solutions",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-[#0099FB] mt-0.5"
                  />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8">

              <h3 className="font-bold text-xl text-[#0B1730]">
                AAMBLV Technologies Private Limited
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex gap-3">
                  <Phone
                    size={20}
                    className="text-[#0099FB]"
                  />
                  <span className="text-slate-600">
                    {SUPPORT_PHONE}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Mail
                    size={20}
                    className="text-[#0099FB]"
                  />
                  <span className="text-slate-600">
                    {SUPPORT_EMAIL}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="p-12 lg:p-16">

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                  />
                </div>

              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Company Name
                </label>

                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Inquiry Type
                </label>

                <select className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none">
                  <option>Business Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                  <option>Technology Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Subject
                </label>

                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0099FB]"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none resize-none focus:border-[#0099FB]"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#0099FB] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0087df] transition"
                >
                  Send Message
                </button>
              </div>

            </form>

          </div>

        </div>
       

      </div>

    </section>
      <Footer />
    </div>
    
  );
}
