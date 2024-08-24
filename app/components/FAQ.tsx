"use client";
import Image from "next/image";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function FAQSection() {
  const isMobile = useIsMobile();
  const questions = [
    {
      id: 0,
      title: "Cu ce este aceasta platforma diferita?",
      description: `Platforma noastră se concentrează pe un lucru
                            esențial: să te învețe să gândești și să înveți ca un
                            programator, nu doar să reproduci coduri predefinite.
                            În loc să îți oferim soluții pe tavă, te ghidăm să
                            înțelegi conceptele fundamentale, să rezolvi probleme
                            și să dezvolți abilități reale, pe care le vei folosi
                            în cariera ta. În plus, toate acestea sunt disponibile
                            la un preț accesibil, oferindu-ți acces la o pregătire
                            constantă și de calitate, fără să cheltuiești sume
                            exorbitante, așa cum se întâmplă cu multe alte cursuri
                            online.`,
    },
    {
      id: 1,
      title: "Acest curs imi promite angajarea?",
      description: `Platforma noastră se concentrează pe un lucru
                            esențial: să te învețe să gândești și să înveți ca un
                            programator, nu doar să reproduci coduri predefinite.
                            În loc să îți oferim soluții pe tavă, te ghidăm să
                            înțelegi conceptele fundamentale, să rezolvi probleme
                            și să dezvolți abilități reale, pe care le vei folosi
                            în cariera ta. În plus, toate acestea sunt disponibile
                            la un preț accesibil, oferindu-ți acces la o pregătire
                            constantă și de calitate, fără să cheltuiești sume
                            exorbitante, așa cum se întâmplă cu multe alte cursuri
                            online.`,
    },
    {
      id: 2,
      title: "Cat timp va dura pana imi gasesc un loc de munca in IT?",
      description: `Timpul necesar pentru a găsi un loc de muncă în IT variază de la persoană la persoană și depinde de mai mulți factori, inclusiv de efortul pe care îl depui, de cât de bine îți dezvolți abilitățile și de cât de activ ești în căutarea unui job. Platforma noastră îți oferă resursele și îndrumarea necesare pentru a te pregăti, dar durata până la angajare depinde în mare parte de tine și de piața muncii. Fii consecvent, folosește tot ceea ce îți oferim, și vei avea cele mai bune șanse de succes.`,
    },
    {
      id: 3,
      title: "La ce am acces ca si membru?",
      description: `Ca membru al platformei, ai acces la mini-tutoriale detaliate, provocări săptămânale care îți testează abilitățile, o secțiune cu oportunități de joburi în IT și o comunitate activă pe Discord. În cadrul acestei comunități, poți interacționa cu alți utilizatori și poți lua legătura direct cu mine pentru suport și îndrumare. În plus, vei beneficia de o secțiune dedicată știrilor din lumea IT, pentru a fi mereu la curent cu cele mai recente tendințe și evoluții din domeniu.`,
    },
    {
      id: 4,
      title: "Pot include mini-proiectele in CV sau portofoliu?",
      description: `Absolut! Mini-proiectele pe care le dezvolți pe platforma noastră sunt create pentru a te ajuta să îți consolidezi abilitățile și sunt perfecte pentru a fi incluse în CV sau portofoliu. Acestea demonstrează competențele tale practice și sunt o modalitate excelentă de a arăta angajatorilor ce poți realiza.`,
    },
  ];

  return (
    <HeroHighlight className="py-20 lg:py-32">
      <p className="heading text-white text-center mb-5 md:mb-10">
        Întrebări primite frecvent
      </p>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Astronaut Image */}
        <div className="flex justify-center w-1/2 h-1/2">
          <Image
            src={"/astronaut_faq.png"}
            alt="faqImage"
            width={isMobile ? 250 : 500}
            height={isMobile ? 250 : 500}
            className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible z-10"
          />
        </div>
        {/* Questions */}
        <div className="flex flex-col gap-y-4 md:gap-y-6 z-10 w-full">
          {questions.map((question) => (
            <div
              key={question.id}
              className="flex flex-row bg-base-content p-2 rounded-2xl gap-x-2 md:gap-x-10"
            >
              <div className=" bg-white w-full rounded-2xl p-4 md:p-6 items-center my-auto">
                <p className="text-lg lg:text-2xl font-semibold text-base-content items-center">
                  {question.title}
                </p>
              </div>
              <Modal>
                <ModalTrigger className="group/modal-btn flex p-0">
                  <Image
                    src={"/arrow.svg"}
                    alt="header"
                    width={60}
                    height={60}
                    className="blur-none group-hover/image:blur-md transition-all duration-200 overflow-visible z-10 bg-secondary hover:bg-primary-content rounded-full p-2 hover:cursor-pointer"
                  />
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <p className="text-base-content text-center font-semibold text-lg md:text-2xl lg:text-3xl py-4">
                      {question.title}
                    </p>
                    <p className="text-center text-base-content font-medium text-md md:text-xl lg:text-2xl">
                      {question.description}
                    </p>
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </HeroHighlight>
  );
}
