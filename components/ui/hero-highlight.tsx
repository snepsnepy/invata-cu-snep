"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative flex items-center bg-white dark:bg-black justify-center w-full group ",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="h-full w-full dark:bg-primary bg-white dark:bg-dot-white/50 bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <motion.div
          className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-white absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 "
          style={{
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          }}
        />

        <div className={cn("relative z-20", className)}>{children}</div>
      </div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1  px-1 rounded-xl bg-gradient-to-r dark:from-[#DFF6FF]/50 dark:to-[#DFF6FF]/50 py-2 px-2`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
