"use client";
import FAQSection from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { NavigationBar } from "./components/NavigationBar";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <main className="dark bg-primary px-4">
      <div className="flex flex-col max-w-[1440px] mx-auto">
        <NavigationBar />
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <SubscriptionSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
