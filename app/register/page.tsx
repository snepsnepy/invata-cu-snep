"use client";
import React from "react";
import { SignUpForm } from "../components/SignUpForm";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

export default function RegiserPage() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center w-full h-full lg:h-screen md:justify-center gap-y-6 px-4 py-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-y-4">
        <SignUpForm />
        <div className="flex flex-col items-center gap-y-2">
          <Image
            src={"/register-photo.png"}
            alt="faqImage"
            width={isMobile ? 200 : 300}
            height={isMobile ? 200 : 300}
            className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible"
          />
          <Image
            src={"/logo.png"}
            alt="faqImage"
            width={100}
            height={50}
            className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible"
          />
        </div>
      </div>
    </div>
  );
}
