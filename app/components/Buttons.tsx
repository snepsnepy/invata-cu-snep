"use client";
import React from "react";

interface Button {
  buttonName: string;
  buttonClass: string;
  buttonAnimation?: string;
}

export function TailwindcssButtons({
  buttonName,
  buttonClass,
  buttonAnimation,
}: Button) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className={buttonAnimation} />
      <span className={buttonClass}>{buttonName}</span>
    </button>
  );
}
