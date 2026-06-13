import { useEffect, useState } from "react";
import Logo from "./Logo";

const navigation = [
  { label: "Services", href: "#services", testId: "nav-services" },
  { label: "Captain Pass", href: "#pass", testId: "nav-captain-pass" },
  { label: "Why Sancharoo", href: "#why", testId: "nav-why-sancharoo" },
  { label: "Download", href: "#download", testId: "nav-download" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div
        className={`
          max-w-7xl mx-auto
          h-16 md:h-20
          px-4 sm:px-6 lg:px-8
          flex items-center justify-between

          rounded-2xl
          border border-white/40

          ${
            scrolled
              ? "bg-white/85 shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
              : "bg-white/65 shadow-[0_8px_32px_rgba(15,23,42,0.08)]"
          }

          backdrop-blur-xl
          backdrop-saturate-150

          transition-all duration-300
        `}
      >
        {/* Logo */}
        <a href="#top" data-testid="brand-logo" onClick={closeMenu}>
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={item.testId}
              className="
                relative
                text-sm
                font-semibold
                text-slate-800
                transition-all

                hover:text-[#0099FB]

                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[2px]
                after:w-0
                after:bg-[#0099FB]
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#book"
            data-testid="nav-book-ride-btn"
            className="
              inline-flex
              items-center
              justify-center

              h-11
              px-6

              rounded-full

              text-sm
              font-semibold
              text-white

              bg-[#0099FB]

              shadow-[0_8px_20px_rgba(0,153,251,0.35)]

              hover:scale-[1.03]
              hover:shadow-[0_12px_30px_rgba(0,153,251,0.45)]

              transition-all
              duration-300
            "
          >
            Book a Ride
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="
            md:hidden
            flex
            items-center
            justify-center

            w-10
            h-10

            rounded-xl

            bg-white/70
            backdrop-blur-md

            border
            border-white/50

            text-slate-900

            shadow-lg

            hover:bg-white

            transition-all
          "
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h16" />
              <path d="M4 18h16" />
              <path d="M4 6h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${isMenuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="
            mx-2
            p-4

            rounded-3xl

            bg-white/80
            backdrop-blur-2xl

            border
            border-white/50

            shadow-[0_20px_50px_rgba(15,23,42,0.15)]
          "
        >
          <div className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="
                  block
                  px-4
                  py-3

                  rounded-xl

                  text-slate-800
                  font-semibold

                  hover:bg-[#0099FB]/10
                  hover:text-[#0099FB]

                  transition-all
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#book"
            onClick={closeMenu}
            className="
              mt-4
              flex
              h-12
              items-center
              justify-center

              rounded-xl

              bg-gradient-to-r
              from-[#0099FB]
              to-[#0077CC]

              text-sm
              font-semibold
              text-white

              shadow-[0_10px_25px_rgba(0,153,251,0.35)]
            "
          >
            Book a Ride
          </a>
        </nav>
      </div>
    </header>
  );
}
