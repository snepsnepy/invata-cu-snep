"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useScrollTo } from "framer-motion-scroll-to-hook";

export function NavbarDemo() {
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
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="#myComp" onClick={() => scrollToId("#myComp", -500)}>
          <MenuItem setActive={setActive} item="Servicii"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} item="Products"></MenuItem>
        <MenuItem setActive={setActive} item="Pricing"></MenuItem>
      </Menu>
    </div>
  );
}
