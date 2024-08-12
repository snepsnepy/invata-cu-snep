import React from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { Highlight } from "@/components/ui/hero-highlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Care este misiunea noastră?
        </h1>
        <p className="mt-4 font-normal text-base/6 text-white max-w-lg text-center mx-auto">
          <Highlight className="font-bold">
            Cu peste 5 ani de experiență în domeniul IT
          </Highlight>
          , am creat această platformă pentru a oferi sprijin atât celor care
          își doresc să înceapă o carieră în tehnologie, cât și celor care au
          nevoie de un mentor pentru a le ghida pașii. Aici, vei găsi resurse și
          suport dedicat pentru a te ajuta să îți atingi obiectivele
          profesionale.
        </p>
      </div>
    </div>
  );
}
