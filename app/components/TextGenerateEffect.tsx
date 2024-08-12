"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

interface Words {
  words: string;
}
export function TextGenerateEffectDemo({ words }: Readonly<Words>) {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
