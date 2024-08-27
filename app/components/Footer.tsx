import { WobbleCard } from "@/components/ui/wobble-card";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import Image from "next/image";

export function Footer() {
  const isMobile = useIsMobile();

  return (
    <>
      <WobbleCard containerClassName="min-h-[300px] bg-transparent border-2 border-base-content mt-20 lg:mt-32">
        <div className="flex flex-row justify-center">
          <div className="max-w-2xl p-4">
            <h1 className="relative z-10 heading bg-clip-text text-base-content text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p></p>
            <p className="text-base-content/80 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Welcome to MailJet, the best transactional email service on the
              web. We provide reliable, scalable, and customizable email
              solutions for your business. Whether you&apos;re sending order
              confirmations, password reset emails, or promotional campaigns,
              MailJet has got you covered.
            </p>
            <input
              type="text"
              placeholder="hi@invatacusnep.ro"
              className="rounded-2xl w-full border-base-content p-4 bg-white focus:ring-2 focus:ring-secondary border-2 relative z-10 mt-4 placeholder:text-base-content/50"
            />
          </div>
        </div>
      </WobbleCard>
      <div className="flex flex-col md:flex-row w-full min-h-[300px] p-4 items-center gap-y-6">
        <div className="flex flex-col w-full gap-y-1 items-center">
          <div className="text-white text-sm md:text-md">Powered by</div>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={isMobile ? 100 : 150}
            height={50}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full gap-x-10 gap-y-6">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col justify-start w-full gap-y-2 text-base-content">
              <p className="font-bold text-md md:text-xl">Contactaza-ne</p>
              <div className="flex flex-col gap-y-2 text-sm md:text-md">
                <p className="hover:text-secondary hover:cursor-pointer">
                  contact@invatacusnep.ro
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full gap-y-2 text-base-content">
              <p className="font-bold text-md md:text-xl">Resurse</p>
              <div className="flex flex-col gap-y-2 text-sm md:text-md">
                <p>Cookie Notice</p>
                <p>Raporteaza o problema</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start w-full gap-y-2 text-base-content ">
            <p className="font-bold text-md md:text-xl">Company</p>
            <div className="flex flex-col gap-y-2 text-sm md:text-md">
              <p>Cine suntem?</p>
              <p>Servicii</p>
              <p>Preturi</p>
              <p>Intrebari frecvente</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
