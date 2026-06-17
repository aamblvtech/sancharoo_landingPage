import { useEffect, useState } from "react";
import Download from "./components/Download";
import DualRole from "./components/DualRole";
import EarnSection from "./components/EarnSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PassPlans from "./components/PassPlans";
import Services from "./components/Services";
import WhyOffer from "./components/WhyOffer";
import Support from "./components/CaptainSupport";
import PrivacyPage from "./components/PrivacyPage";
import ContactUs from "./components/ContactUs";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    // Add a custom event listener for internal routing if we want pushState transitions
    window.addEventListener("pushstate-change", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate-change", handleLocationChange);
    };
  }, []);

  const isPrivacyPage =
    currentPath === "/privacy" || currentPath === "/privacy/";

  useEffect(() => {
    if (!isPrivacyPage) {
      document.title = "Sancharoo | Ride, Deliver and Earn";
      const descMeta = document.querySelector('meta[name="description"]');
      if (descMeta) {
        descMeta.setAttribute(
          "content",
          "Book affordable bike and cab rides, send parcels, or earn as a Sancharoo captain with transparent pass-based pricing.",
        );
      }
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", "https://sancharoo.com/");
      }
      // OG & Twitter tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle)
        ogTitle.setAttribute("content", "Sancharoo | Ride, Deliver and Earn");
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute(
          "content",
          "Book affordable bike and cab rides, send parcels, or earn as a Sancharoo captain with transparent pass-based pricing.",
        );
      }
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", "https://sancharoo.com/");

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle)
        twitterTitle.setAttribute(
          "content",
          "Sancharoo | Ride, Deliver and Earn",
        );
      const twitterDesc = document.querySelector(
        'meta[name="twitter:description"]',
      );
      if (twitterDesc) {
        twitterDesc.setAttribute(
          "content",
          "Book affordable bike and cab rides, send parcels, or earn as a Sancharoo captain with transparent pass-based pricing.",
        );
      }
    }
  }, [isPrivacyPage]);

  if (isPrivacyPage) {
    return <PrivacyPage />;
  }

  if (currentPath === "/captain-support") {
    return <Support />;
  }
  if (currentPath === "/contact") {
    return <ContactUs />;
  }

  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#F1F6FB]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DualRole />
        <EarnSection />
        <PassPlans />
        <WhyOffer />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
