"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} item="Servicii"></MenuItem>
        <MenuItem setActive={setActive} item="Products"></MenuItem>
        <MenuItem setActive={setActive} item="Pricing"></MenuItem>
      </Menu>
    </div>
  );
}
