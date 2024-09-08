
import { CardSecCinco } from "./cardSecCinco";
import blogImage from "../assets/blogImage.png"

interface Sect {
  tittle: string;
}

export function SectionCinco({ tittle }: Sect) {
  return (
    <section className="relative bg-gray-100 bg-cover bg-center">
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative">
        <h1 className="mb-36 custom-title text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-blue-700 text-center">
          {tittle}
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <CardSecCinco
            tittle="Los mejores cursos para aprender de finanzas personales"
            description="June 26, 2024"
            image={blogImage}
          />
          <CardSecCinco
            tittle="Por qué es importante la educación financiera"
            description="June 26, 2024"
            image={blogImage}
          />
          <CardSecCinco 
            tittle="Guía para elegir el mejor préstamo personal"
            description="June 26, 2024"
            image={blogImage}
          />
        </div>
      </div>
    </section>
  );
}
