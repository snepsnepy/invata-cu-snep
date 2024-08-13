"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CardSpotlightDemo } from "./CardSpotlight";

export function HeroScrollDemo() {
  return (
    <HeroHighlight>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Sună interesant? <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Vino alături de noi
                </span>
              </h1>
            </>
          }
        >
          <CardSpotlightDemo />
        </ContainerScroll>
      </div>
    </HeroHighlight>
  );
}
