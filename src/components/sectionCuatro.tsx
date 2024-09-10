import { useEffect, useRef } from "react";
import { CardSecCuatro } from "./cardSecCuatro";
import joseGarcia from "../assets/joseGarcia.png"
import lauraFernandez from "../assets/lauraFernandez.png"
import manuelRamirez from "../assets/manuelRamirez.png"
import mariaRodriguez from "../assets/mariaRodriguez.png"
import patriciaCruz from "../assets/patriciaCruz.png"
import pedroSanchez from "../assets/pedroSanchez.png"
import rosaDiaz from "../assets/rosaDiaz.png"
import anaLopez from "../assets/anaLopez.png"
import carmeGonzalez from "../assets/carmenGonzalez.png"

interface Sect {
  tittle: string;
}

export function SectionCuatro({ tittle }: Sect) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
      let scrollPosition = 0;
      
      const scrollStep = () => {
        if (scrollContainer) {
          scrollPosition += 1;
          if (scrollPosition >= scrollWidth - containerWidth) {
            scrollPosition = 0;
          }
          scrollContainer.scrollLeft = scrollPosition;
        }
      };

      const intervalId = setInterval(scrollStep, 20); 

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <section className="relative bg-white bg-cover bg-center">
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative">
        <h1 className="tittle mb-36 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-blue-700 text-center">
          {tittle}
        </h1>
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-8 overflow-hidden"
        >
          <CardSecCuatro
            tittle="By María Rodríguez"
            description="La atención fue excelente y el desembolso inmediato. Superó mis expectativas. Muy contenta con la experiencia, recomiendo totalmente sus préstamos."
            imagen={mariaRodriguez}
            tittle2="Préstamo Personal"
          />
          <CardSecCuatro
            tittle="By Ana López"
            description="Gracias a Bankok, pude resolver una urgencia financiera en minutos. Muy agradecido por el servicio eficiente y profesional que ofrecen."
            imagen={anaLopez}
            tittle2="Préstamo Hipotecario"
          />
          <CardSecCuatro
            tittle="By Carmen González"
            description="Solicitar mi préstamo fue muy fácil y rápido. Estoy muy contenta con la atención recibida y la rapidez del proceso. Muy satisfecha."
            imagen={carmeGonzalez}
            tittle2="Financiamiento Automotriz"
          />
          <CardSecCuatro
            tittle="By Rosa Días"
            description="La atención fue excelente y el desembolso inmediato. Superó mis expectativas. Muy contenta con la experiencia, recomiendo totalmente sus préstamos."
            imagen={rosaDiaz}
            tittle2="Préstamo Personal"
          />
          <CardSecCuatro
            tittle="By Manuel Ramírez"
            description="Gracias a Bankok, pude resolver una urgencia financiera en minutos. Muy agradecido por el servicio eficiente y profesional que ofrecen."
            imagen={manuelRamirez}
            tittle2="Préstamo Hipotecario"
          />
          <CardSecCuatro
            tittle="By Laura Fernández"
            description="Solicitar mi préstamo fue muy fácil y rápido. Estoy muy contenta con la atención recibida y la rapidez del proceso. Muy satisfecha."
            imagen={lauraFernandez}
            tittle2="Préstamo Personal"
          />
          <CardSecCuatro
            tittle="By Pedro Sánchez"
            description="Gracias a Bankok, pude resolver una urgencia financiera en minutos. Muy agradecido por el servicio eficiente y profesional que ofrecen."
            imagen={pedroSanchez}
            tittle2="Financiamiento Automotriz"
          />
          <CardSecCuatro
            tittle="By Patricia Cruz"
            description="La atención al cliente fue excelente y el proceso muy rápido. Estoy muy satisfecha con el servici. Sin duda volveré a utilizar sus servicios."
            imagen={patriciaCruz}
            tittle2="Préstamo Personal"
          />
          <CardSecCuatro
            tittle="By José Garcia"
            description="El proceso de solicitud de prestamo fue muy fácil y rápido. Bankok me ayudó a resolver mis necesidades financieras de manera eficiente"
            imagen={joseGarcia}
            tittle2="Financiamiento Automotriz"
          />
        </div>
      </div>
    </section>
  );
}
