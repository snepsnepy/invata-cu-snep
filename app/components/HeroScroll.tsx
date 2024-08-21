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
              <h1 className="text-2xl lg:text-4xl font-semibold text-black dark:text-primary-content">
                Sună interesant? <br />
                <span className="heading font-bold mt-1 leading-none">
                  Vino alături de noi!
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
