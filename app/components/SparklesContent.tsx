"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffectDemo } from "./TextGenerateEffect";
import { TypewriterEffectSmoothDemo } from "./TypewritterEffect";

export function SparklesContent() {
  const titleWords = [
    {
      text: "Care  ",
    },
    {
      text: "este",
    },
    {
      text: "misiunea noastră?",
      className: "dark:text-cyan-600",
    },
  ];

  const contentText = `Cu peste 5 ani de experiență în domeniul IT, am creat această platformă pentru a oferi sprijin atât celor care își doresc să înceapă o carieră în tehnologie, cât și celor care au nevoie de un mentor pentru a le ghida pașii. Aici, vei găsi resurse și suport dedicat pentru a te ajuta să îți atingi obiectivele profesionale.`;
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00ACC1"
        />
      </div>
      <div className="flex flex-col w-full items-center gap-y-8">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          <TypewriterEffectSmoothDemo words={titleWords} />
        </h1>
        <h1 className="md:text-5xl text-3xl lg:text-5xl font-semibold text-center text-white relative z-20 max-w-xl ">
          <TextGenerateEffectDemo words={contentText} />
        </h1>
      </div>
    </div>
  );
}
