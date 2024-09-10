import { DocumentIcon } from "../assets/documentIcon";
import { ApprovalIcon } from "../assets/aprovalIcon";
import { DisbursementIcon } from "../assets/DisbursementIcon";
import { CardSecUno } from "./cardSecUno";

interface Sect {
  tittle: string;
}

export function SectionUno({ tittle }: Sect) {
  return (
    <section className="relative bg-white bg-cover bg-center">
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative">
        <h1 className="tittle mb-36 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-blue-700 text-center">
          {tittle}
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <CardSecUno 
            tittle="Completar el formulario."
            description="Rellenar nuestro sencillo formulario en línea con tus datos básicos. ¡Te tomará solo unos minutos!"
            svg={<DocumentIcon />}
            bgColor="bg-yellow-500"
          />
          <CardSecUno 
            tittle="Aprobación en minutos."
            description="Obtendrás una respuesta en cuestión de minutos de que tu préstamo ha sido aprobado."
            svg={<ApprovalIcon />}
            bgColor="bg-red-500"
          />
          <CardSecUno 
            tittle="Desembolso inmediato."
            description="Una vez aprobado, el dinero será transferido a tu cuenta de forma instantánea. ¡Así de fácil y rápido!"
            svg={<DisbursementIcon />}
            bgColor="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
