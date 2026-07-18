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
import ReferEarn from "./components/ReferAndEarn";
import SeoJsonLd from "./components/SeoJsonLd";
import {
  applySeo,
  buildOrganizationSchema,
  buildSoftwareSchema,
  buildWebsiteSchema,
  routeMeta,
} from "./seo";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const normalizedPath =
    currentPath.length > 1 ? currentPath.replace(/\/$/, "") : currentPath;

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
    normalizedPath === "/privacy" ||
    normalizedPath === "/terms/rider" ||
    normalizedPath === "/terms/captain" ||
    normalizedPath === "/privacy/rider" ||
    normalizedPath === "/privacy/captain";

  useEffect(() => {
    if (!isPrivacyPage) applySeo(routeMeta[normalizedPath] || routeMeta["/"]);
  }, [normalizedPath, isPrivacyPage]);

  if (isPrivacyPage) {
    return <PrivacyPage />;
  }

  if (normalizedPath === "/captain-support") {
    return <Support />;
  }
  if (normalizedPath === "/contact") {
    return <ContactUs />;
  }
  if (normalizedPath === "/refer-and-earn") {
    return <ReferEarn />;
  }

  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#F1F6FB]">
      <SeoJsonLd
        data={[
          buildOrganizationSchema(),
          buildWebsiteSchema(),
          buildSoftwareSchema(),
        ]}
      />
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
