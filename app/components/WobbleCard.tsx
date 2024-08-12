"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TypewriterEffectSmoothDemo } from "./TypewritterEffect";

export function WobbleCardDemo() {
  const cardWords = [
    {
      text: "Pentru     ",
    },
    {
      text: "începătorii",
      className: "dark:text-[#FFC94A] stroke-black",
    },
    {
      text: "în",
    },
    {
      text: "IT",
    },
  ];

  const description = `Beneficiază de mini-cursuri interactive, tutoriale detaliate, articole
        relevante și provocări săptămânale. În plus, poți împărtăși experiențele
        tale de interviu și poți găsi oferte de joburi potrivite pentru tine.`;

  return (
    <HeroHighlight>
      <div className="pb-20">
        <TypewriterEffectSmoothDemo
          words={cardWords}
          description={description}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#FFC94A] min-h-[500px] lg:min-h-[300px] border border-black"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Mentorat Personalizat
            </h2>
            <p className="mt-4 text-left text-base/6 text-black font-semibold">
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
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#EE4E4E] border border-black">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Învățare practică și interactivă
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white ">
            Prin mini-tutoriale și exerciții practice, înveți aplicând imediat
            ceea ce ai studiat, ceea ce te ajută să reții și să înțelegi mai
            bine conceptele.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-white border border-black">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            Oportunități de carieră
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-black ">
            Descoperă oportunități de joburi în IT și pregătește-te pentru
            interviuri cu ajutorul comunității și al mentorului tău.
          </p>
        </WobbleCard>
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#06283D] min-h-[500px] lg:min-h-[300px] border border-black"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Resurse Diverse
            </h2>
            <p className="mt-4 text-left  text-base/6 text-white">
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
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </HeroHighlight>
  );
}
