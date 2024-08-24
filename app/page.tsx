"use client";
import FAQSection from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { HeroScrollDemo } from "./components/HeroScroll";
import { NavbarDemo } from "./components/NavBarMenu";
import { WobbleCardDemo } from "./components/WobbleCard";
import { useIsMobile } from "./hooks/useIsMobile";
import Image from "next/image";

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

        <div className="flex flex-col w-full items-center gap-y-1 py-10">
          <div className="text-white text-xs text-center">Powered by</div>
          <Image src={"/logo.png"} alt="logo" width={110} height={50} />
        </div>
      </div>
    </main>
  );
}
