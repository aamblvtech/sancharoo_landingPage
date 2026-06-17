import Logo2 from "./Logo2";

export default function Footer() {
  const navigateToPrivacy = (e, tab) => {
    e.preventDefault();
    window.history.pushState({}, "", `/privacy?tab=${tab}`);
    window.dispatchEvent(new Event("pushstate-change"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#06101F] text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 pb-14 border-b border-white/10">
          <div className="background-white col-span-2 md:col-span-4">
            <Logo2 />
            <p className="text-white/65 text-sm leading-relaxed max-w-xs mt-5">
              A rider-friendly platform created by drivers and supported by
              leading tech innovators, building a stronger community through
              shared success.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-white/70">
              <div className="flex items-center gap-2.5">
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
                  className="lucide lucide-map-pin w-4 h-4 text-[#0099FB]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Hunter Rd, beside PADMAVATHI GARDENS, Ramannapet, Warangal,
                Telangana 506001
              </div>
              <div className="flex items-center gap-2.5">
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
                  className="lucide lucide-phone w-4 h-4 text-[#0099FB]"
                  aria-hidden="true"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                +91 80083 03742
              </div>
              <div className="flex items-center gap-2.5">
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
                  className="lucide lucide-mail w-4 h-4 text-[#0099FB]"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                aamblvtech@gmail.com
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Ride
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Bike Taxi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Cab
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Parcel
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Schedule a ride
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Earn
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Captain passes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Become a captain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Refer &amp; earn
                </a>
              </li>
              <li>
                <a
                  href="/captain-support"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Captain support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Company
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <div className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Legal
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/privacy?tab=terms-user"
                  onClick={(e) => navigateToPrivacy(e, "terms-user")}
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Terms &amp; Conditions-User
                </a>
              </li>
              <li>
                <a
                  href="/privacy?tab=terms-captain"
                  onClick={(e) => navigateToPrivacy(e, "terms-captain")}
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Terms &amp; Conditions-Captain
                </a>
              </li>
              <li>
                <a
                  href="/privacy?tab=privacy-user"
                  onClick={(e) => navigateToPrivacy(e, "privacy-user")}
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Privacy Policy-User
                </a>
              </li>
              <li>
                <a
                  href="/privacy?tab=privacy-captain"
                  onClick={(e) => navigateToPrivacy(e, "privacy-captain")}
                  className="text-sm text-white/65 hover:text-[#0099FB] transition-colors"
                >
                  Privacy Policy-Captain
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8">
          <div className="text-xs text-white/50">
            ©<span style={{ display: "contents" }}>2026</span>
            SancHaroO Powered By Aamblv Technologies Private limited.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#"
              data-testid="footer-social-instagram"
              aria-label="instagram"
              className="w-10 h-10 grid place-items-center rounded-full bg-white/5 hover:bg-[#0099FB] border border-white/10 transition-all hover:-translate-y-0.5"
            >
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
                className="lucide lucide-instagram w-4 h-4"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="#"
              data-testid="footer-social-twitter"
              aria-label="twitter"
              className="w-10 h-10 grid place-items-center rounded-full bg-white/5 hover:bg-[#0099FB] border border-white/10 transition-all hover:-translate-y-0.5"
            >
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
                className="lucide lucide-twitter w-4 h-4"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="#"
              data-testid="footer-social-youtube"
              aria-label="youtube"
              className="w-10 h-10 grid place-items-center rounded-full bg-white/5 hover:bg-[#0099FB] border border-white/10 transition-all hover:-translate-y-0.5"
            >
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
                className="lucide lucide-youtube w-4 h-4"
                aria-hidden="true"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
