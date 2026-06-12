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
import PrivacyPage from "./components/PrivacyPage";

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

  const isPrivacyPage = currentPath === "/privacy" || currentPath === "/privacy/";

  if (isPrivacyPage) {
    return <PrivacyPage />;
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
