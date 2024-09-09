"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useScrollTo } from "framer-motion-scroll-to-hook";
import { TailwindcssButtons } from "./Buttons";

export function NavigationBar() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const scrollToId = useScrollTo();

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="#servicii" onClick={() => scrollToId("#servicii", -100)}>
          <MenuItem setActive={setActive} item="Servicii"></MenuItem>
        </Link>
        <Link href="#abonament" onClick={() => scrollToId("#abonament", -100)}>
          <MenuItem setActive={setActive} item="Abonament"></MenuItem>
        </Link>
        <Link href="#intrebari" onClick={() => scrollToId("#intrebari", -100)}>
          <MenuItem setActive={setActive} item="Intrebari"></MenuItem>
        </Link>

        <Link href="/login" className="flex">
          <TailwindcssButtons
            buttonName="Intră în cont"
            buttonClass="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-secondary px-7 py-2 text-sm lg:text-base font-semibold text-base-content backdrop-blur-3xl border-2 border-base-content hover:bg-primary-content hover:border-2 hover:bg-primary-content/80"
          />
        </Link>
      </Menu>
    </div>
  );
}
