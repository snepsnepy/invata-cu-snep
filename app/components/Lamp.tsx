"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-white to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <p className="heading dark:text-neutral-200 font-sans">
            Care este misiunea noastră?
          </p>
          <p className="subheading max-w-xl">
            <b>Cu peste 5 ani de experiență în domeniul IT,</b> am creat această
            platformă pentru a oferi sprijin atât celor care își doresc să
            înceapă o carieră în tehnologie, cât și celor care au nevoie de un
            mentor pentru a le ghida pașii. Aici, vei găsi resurse și suport
            dedicat pentru a te ajuta să îți atingi obiectivele profesionale.
          </p>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
