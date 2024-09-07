"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { CardSpotlightDemo } from "./CardSpotlight";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

export function SubscriptionSection() {
  const isMobile = useIsMobile();

  return (
    <HeroHighlight>
      <div className="flex flex-col overflow-hidden" id="abonament">
        <Image
          src={"/astronaut_travel.png"}
          alt="header"
          width={isMobile ? 100 : 470}
          height={isMobile ? 100 : 470}
          className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible z-10 absolute -right-3.5 top-24 md:top-0 md:right-20 md:w-40 md:h-40 lg:right-4 lg:top-48 lg:w-60 lg:h-60"
        />
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl lg:text-4xl font-semibold text-black dark:text-primary-content text-left md:text-center px-2">
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
