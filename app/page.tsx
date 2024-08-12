import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { NavbarDemo } from "./components/NavBarMenu";
import { WobbleCardDemo } from "./components/WobbleCard";

export default function Home() {
  return (
    <main className="dark bg-[#47B5FF] px-4">
      <div className="flex flex-col max-w-[1440px] mx-auto">
        <NavbarDemo />
        <HeroHighlightDemo />
        <WobbleCardDemo />
      </div>
    </main>
  );
}
