"use client";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function FeaturesSection() {
  const title = "De ce merită să înveți cu noi?";
  const description = `Într-o lume plină de cursuri costisitoare și uneori inutile,
            platforma noastră îți oferă o alternativă accesibilă și eficientă.
            Aici, nu trebuie să cheltuiești sume mari de bani pentru a învăța
            programare web. Beneficiezi de o pregătire constantă, resurse
            relevante și suport personalizat, toate într-un singur loc.`;

  const isMobile = useIsMobile();

  return (
    <HeroHighlight className="py-32">
      <div className="flex flex-col rounded-2xl">
        <p className="text-primary-content text-center w-full lg:w-1/3 font-bold heading animate-bounce">
          {title}
        </p>
        <div className="overflow-visible flex flex-col justify-center items-center gap-y-4 lg:flex-row md:gap-x-4">
          <Image
            src={"/astronaut_thinking.png"}
            alt="header"
            width={isMobile ? 300 : 400}
            height={isMobile ? 300 : 400}
            className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible z-10"
          />

          <div className="flex flex-col justify-center md:flex-row">
            <div className="flex w-full lg:w-full h-fit mx-auto my-auto bg-primary-content rounded-2xl border-4 border-base-content px-4 py-10 md:py-16 sm:px-10 -z-10 ">
              <p className="text-base-content text-center font-semibold text-lg lg:text-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
}
