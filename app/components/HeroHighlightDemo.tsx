"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "@/components/ui/flip-words";
import { TailwindcssButtons } from "./Buttons";

export function HeroHighlightDemo() {
  const words = ["îndruma", "ajuta", "sprijini"];

  return (
    <HeroHighlight className="py-20 lg:py-32">
      <div className="flex flex-col-reverse md:flex-row w-full md:px-0 h-full lg:gap-x-10 gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4 ">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-primary-content max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            {/* Title & Subtitle */}
            <div className="flex flex-col gap-y-2">
              <div className="heading leading-normal md:leading-normal xl:leading-snug text-center md:text-left text-primary-content">
                <Highlight>Învață și Crește</Highlight> alături de o comunitate
                dedicată programării!
              </div>
              <div className="body-text text-center md:text-left md:pr-6 text-primary-content font-normal text-sm md:text-md lg:text-lg">
                Fie că ești la început de drum sau ai absolvit deja un curs și
                cauți un loc de muncă, suntem aici pentru a te
                <FlipWords words={words} />
                să îți atingi scopul.
              </div>
            </div>
          </motion.h1>
          <div className="flex flex-row justify-center md:justify-start w-full md:space-y-0 space-x-2 md:space-x-4">
            <TailwindcssButtons
              buttonName="Intră în cont"
              buttonClass="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary-content px-7 py-2 text-sm lg:text-base font-semibold text-base-content backdrop-blur-3xl border-2 border-base-content hover:bg-primary-content hover:border-2 hover:bg-primary-content/80"
            />
            <TailwindcssButtons
              buttonName="Crează un cont"
              buttonAnimation="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#331846_0%,white_30%,white_100%)]"
              buttonClass="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-base-content px-7 py-2 text-sm lg:text-base font-semibold text-primary-content backdrop-blur-3xl hover:bg-primary-content"
            />
          </div>
        </div>
        <div className="my-auto max-w-[700px] max-h-[700px] rounded-full">
          <Image
            src={"/astronaut.png"}
            alt="header"
            width={900}
            height={900}
            className="rounded-full blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>
    </HeroHighlight>
  );
}
