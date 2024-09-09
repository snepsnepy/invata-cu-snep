"use client";
import { SignInForm } from "../components/SignInForm";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

export default function RegiserPage() {
  const { isMobile, isClient } = useIsMobile();

  return (
    <div className="flex flex-col items-center w-full h-full lg:h-screen md:justify-center gap-y-6 px-4 py-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-end gap-y-4">
        <SignInForm />
        <div className="flex flex-col items-center gap-y-2">
          {isClient && !isMobile && (
            <Image
              src={"/login-photo.png"}
              alt="faqImage"
              width={isMobile ? 200 : 300}
              height={isMobile ? 200 : 300}
              className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible"
            />
          )}
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
