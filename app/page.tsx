import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { NavbarDemo } from "./components/NavBarMenu";
import { WobbleCardDemo } from "./components/WobbleCard";

export default function Home() {
  return (
    <main className="dark bg-[#47B5FF]">
      <div className="flex flex-col max-w-[1440px] mx-auto h-full ">
        <NavbarDemo />
        <HeroHighlightDemo />
        {/* <SparklesContent /> */}
        <div>{/* <WobbleCardDemo /> */}</div>
      </div>
    </main>
  );
}
