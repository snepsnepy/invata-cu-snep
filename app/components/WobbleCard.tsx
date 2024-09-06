"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { useIsMobile } from "../hooks/useIsMobile";

export function WobbleCardDemo() {
  const isMobile = useIsMobile();

  return (
    <HeroHighlight className="py-20 lg:py-32">
      <p className="text-white text-center font-bold heading">
        Iată ce am pregătit pentru tine
      </p>
      <Image
        src={"/astronaut_chef.png"}
        alt="header"
        width={isMobile ? 300 : 600}
        height={isMobile ? 300 : 600}
        className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible md:-mt-5 lg:-mt-10 -z-10 "
      />

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full -mt-20 md:-mt-32 bg-primary z-10"
        id="myComp"
      >
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-secondary min-h-[500px] lg:min-h-[300px] border-4 border-base-content"
          className=""
        >
          <div className="max-w-xs px-2">
            <div className="flex gap-x-2">
              <div className="my-auto text-6xl lg:text-7xl font-extrabold">
                <span className="text-black/50">0</span>1
              </div>
              <h2 className="text-left my-auto text-balance text-xl lg:text-3xl font-bold tracking-[-0.015em] text-black">
                Mentorat <br /> Personalizat
              </h2>
            </div>

            <p className="mt-4 text-left text-base/6 text-black">
              Beneficiezi de îndrumare și suport personalizat din partea unui
              mentor cu peste 5 ani de experiență în domeniul IT. Nu vei fi
              niciodată singur în călătoria ta de învățare.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl px-2"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-error border-4 border-base-content">
          <div className="flex gap-x-2">
            <div className="my-auto text-6xl lg:text-7xl font-extrabold text-white ">
              <span className="opacity-50">0</span>2
            </div>
            <h2 className="max-w-80 my-auto text-left text-balance text-xl lg:text-2xl font-bold tracking-[-0.015em] text-white">
              Învățare <br /> interactivă
            </h2>
          </div>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white ">
            Prin mini-tutoriale și exerciții practice, înveți aplicând imediat
            ceea ce ai studiat, ceea ce te ajută să reții și să înțelegi mai
            bine conceptele.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] w-full bg-white border-4 border-base-content">
          <div className="flex gap-x-2">
            <div className="my-auto text-6xl lg:text-7xl font-extrabold text-black">
              <span className="opacity-50">0</span>3
            </div>
            <h2 className="max-w-80 my-auto text-left text-balance text-xl lg:text-2xl font-bold tracking-[-0.015em] text-black">
              Oportunități <br /> de carieră
            </h2>
          </div>

          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-black ">
            Descoperă oportunități de joburi în IT și pregătește-te pentru
            interviuri cu ajutorul comunității și al mentorului tău.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-base-content/50 min-h-[500px] lg:min-h-[300px] border-4 border-base-content"
          className=""
        >
          <div className="max-w-xs">
            <div className="flex gap-x-2">
              <div className="my-auto text-6xl lg:text-7xl font-extrabold text-white">
                <span className="opacity-50">0</span>4
              </div>
              <p className="text-left my-auto text-balance text-xl lg:text-2xl font-bold tracking-[-0.015em] text-white">
                Resurse <br /> Diverse
              </p>
            </div>
            <p className="mt-4 text-left text-base/6 text-white">
              Parcurge cursuri scurte și eficiente care te vor ajuta să înveți
              rapid concepte esențiale de programare web. "Accesează tutoriale
              pas cu pas care îți vor ghida învățarea și îți vor permite să
              aplici imediat noile cunoștințe.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 md:-right-[30%] lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </HeroHighlight>
  );
}
