"use client";
import FAQSection from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { HeroScrollDemo } from "./components/HeroScroll";
import { NavbarDemo } from "./components/NavBarMenu";
import { WobbleCardDemo } from "./components/WobbleCard";

export default function Home() {
  return (
    <main className="dark bg-primary px-4">
      <div className="flex flex-col max-w-[1440px] mx-auto">
        <NavbarDemo />
        <HeroHighlightDemo />
        <FeaturesSection />
        <WobbleCardDemo />
        <HeroScrollDemo />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
