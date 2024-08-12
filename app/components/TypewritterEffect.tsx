"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

type Word = {
  text: string;
};

interface Words {
  words: Word[];
  description?: string;
}

export function TypewriterEffectSmoothDemo({ words, description }: Words) {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <p className="dark:text-white text-sm md:text-md lg:text-lg font-normal text-center">
        {description}
      </p>
    </div>
  );
}
