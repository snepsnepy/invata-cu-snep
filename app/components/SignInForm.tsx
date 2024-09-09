"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export function SignInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-lg w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-primary-content border-[3px] border-base-content z-10">
      <div className="flex flex-col gap-y-2">
        <h2 className="subheading text-base-content">Bine ai revenit!</h2>
        <p className="text-sm md:text-base text-base-content">
          Autentifică-te pentru a continua să înveți și să îți dezvolți
          abilitățile.
        </p>
      </div>

      <form className="my-2" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Parolă" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative mt-10 group/btn dark:bg-secondary hover:dark:bg-base-content hover:text-secondary w-full text-base-content font-semibold rounded-2xl h-10 border border-base-content"
          type="submit"
        >
          Intră în cont &rarr;
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4 ">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-2xl h-10 font-medium shadow-input dark:bg-base-content hover:dark:bg-base-content/80"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-primary-content" />
            <span className="text-neutral-700 dark:text-primary-content  text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-2xl h-10 font-medium shadow-input bg-gray-50 dark:bg-base-content hover:dark:bg-base-content/80"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-primary-content" />
            <span className="text-neutral-700 dark:text-primary-content text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
