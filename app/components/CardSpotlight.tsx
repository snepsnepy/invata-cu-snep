import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TailwindcssButtons } from "./Buttons";

export function CardSpotlightDemo() {
  const plans = [
    {
      standard: true,
      title: "Standard",
      description:
        "Acces la tutoriale, articole și exerciții săptămânale. Ideal pentru învățare în ritmul propriu.",
      price: "49 RON",
      benefits: [
        "Enter your email address",
        "Create a strong password",
        "Set up two-factor authentication",
        "Verify your identity",
        "Set up two-factor authentication",
        "Verify your identity",
      ],
    },
    {
      standard: false,
      title: "Premium",
      description:
        "Acces total, mentorat personalizat și resurse exclusive. Ideal pentru progres accelerat.",
      price: "99 RON",
      benefits: [
        "Enter your email address Premium",
        "Create a strong password Premium",
        "Set up two-factor authentication Premium",
        "Verify your identity Premium",
        "Set up two-factor authentication Premium",
        "Verify your identity Premium",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full items-center lg:flex-row h-full gap-y-4 md:gap-x-10">
      {plans.map((plan, index) => (
        <CardSpotlight
          key={index}
          className={`h-full w-full md:min-w-[20rem] text-center ${
            plan.standard
              ? "dark:bg-primary-content border-4"
              : "dark:bg-secondary border-4"
          }`}
        >
          <div className="flex flex-col items-center justify-center text-black gap-y-8 h-full">
            <div className="text-2xl md:text-4xl font-bold text-black">
              {plan.title}
            </div>
            <div className="font-normal text-sm md:text-md">
              {plan.description}
            </div>
            <div>
              <p
                className={`${
                  plan.standard ? "text-secondary" : "text-black"
                } font-bold text-4xl md:text-6xl`}
              >
                {plan.price}{" "}
                <span
                  className={`${
                    plan.standard ? "text-secondary" : "text-black"
                  } text-sm md:text-xl font-normal`}
                >
                  {" "}
                  /lună
                </span>
              </p>
              {/* <button className="btn bg-blue-100">Cumpara acum</button> */}
            </div>
            <div className="flex flex-col font-semibold gap-y-2">
              {plan.benefits.map((benefit, index) => (
                <Step key={index} title={benefit} />
              ))}
            </div>
            <div>
              <TailwindcssButtons
                buttonName="Alege pachetul"
                buttonAnimation="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#331846_30%,#331846_100%)]"
                buttonClass={`${
                  plan.standard
                    ? "bg-secondary border-[1.5px] border-black hover:bg-primary-content"
                    : "bg-primary-content border-[1.5px] border-black hover:bg-secondary"
                } inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  px-12 py-4 text-sm lg:text-base font-semibold text-base-content backdrop-blur-3xl `}
              />
            </div>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-center">
      <CheckIcon />
      <p className="w-full text-black text-left text-sm md:text-md">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-[#059212]"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
