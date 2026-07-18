import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  CAPTAIN_PLAY_STORE_URL,
  CAPTAIN_WEB_APP_URL,
  RIDER_PLAY_STORE_URL,
  RIDER_WEB_APP_URL,
} from "../seo";

export default function Download() {
  return (
    <section
      id="download"
      data-testid="download-section"
      className="py-20 md:py-32 bg-[#F1F6FB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0099FB] to-[#0077CC] p-8 md:p-16 grain-overlay"
          style={{ opacity: 1, transform: "none" }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-[#FFD645]/30 blur-3xl"
          ></div>
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/85 mb-4">
                Download the app
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                The city moves faster with
                <br />
                <span className="text-[#FFD645]">Sancharoo</span> in your
                pocket.
              </h2>
              <p className="mt-5 text-white/90 max-w-lg">
                Install the Android apps from Google Play, or use the web apps
                on iPhone until the iOS app is available.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={RIDER_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-[#0B1730] hover:bg-black text-white rounded-2xl px-6 h-16 transition-all"
                >
                  <i className="fa-brands fa-google-play text-3xl"></i>

                  <div className="text-left">
                    

                    <div className="font-bold text-xl">Rider App</div>
                  </div>
                </a>
                <a
                  href={CAPTAIN_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 bg-white text-[#0B1730] rounded-2xl px-6 h-16 hover:shadow-xl transition-all"
                >
                  <i className="fa-brands fa-google-play text-3xl"></i>

                  <div className="text-left">
                    

                    <div className="font-bold text-xl">Captain App</div>
                  </div>
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                <a
                  href={RIDER_WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  Use Rider Web App
                </a>
                <a
                  href={CAPTAIN_WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                >
                  Use Captain Web App
                </a>
              </div>
              {/* <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/90">
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Android apps on Google Play
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Web apps available for browser and iPhone
                </span>
              </div> */}
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-[260px] md:w-[300px] aspect-[9/19] rounded-[2.4rem] border-[10px] border-[#0B1730] bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-float">
                <div className="absolute inset-x-0 top-0 h-6 bg-[#0B1730] flex items-center justify-center">
                  <div className="w-20 h-1 rounded-full bg-black/40"></div>
                </div>
                <div className="pt-10 px-5">
                  <div className="text-[10px] text-slate-500 font-bold uppercase">
                    Good morning
                  </div>
                  <div className="font-display text-xl font-extrabold text-[#0B1730]">
                    Where to?
                  </div>
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                      <span className="text-xs text-slate-700 font-semibold">
                        Home
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-100 rounded-xl px-3 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#0099FB]"></span>
                      <span className="text-xs text-slate-700 font-semibold">
                        Indiranagar Metro
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="rounded-xl p-2.5 bg-[#0B1730] text-white">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Bike
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹48
                      </div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-slate-100 text-slate-700">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Cab
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹180
                      </div>
                    </div>
                    <div className="rounded-xl p-2.5 bg-slate-100 text-slate-700">
                      <div className="text-[9px] font-bold uppercase opacity-80">
                        Parcel
                      </div>
                      <div className="font-display text-sm font-extrabold mt-0.5">
                        ₹65
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 bg-[#0099FB] text-white text-center rounded-xl py-2.5 text-xs font-bold tracking-wide">
                    BOOK BIKE · 3 MIN AWAY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
