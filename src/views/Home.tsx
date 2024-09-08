import Header from "../components/header";
import { Section } from "../components/section";
import { SectionUno } from "../components/sectionUno";
import { SectionDos } from "../components/sectionDos";
import { SectionTres } from "../components/sectionTres";

function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-orange-600">
      <div className="flex-grow">
        <Header />
        <Section
          tittle="Haz realidad tus planes con un préstamo Bk, fácil y al instante."
          description="Resuelve tus urgencias financieras en minutos y disfruta tu crédito en lo que más te gusta. ¡Así de fácil!"
        />
        <SectionUno
          tittle="Consigue tu préstamo en línea en"
        />
        <SectionDos
          tittle="Beneficios de los créditos"
        />
        <SectionTres
          tittle="Preguntas"
          description="¿Quieres saber más? Puedes enviarnos un correo electrónico en cualquier momento."
          email="soporte@bk.com.do"
        />
      </div>
    </div>
  );
}

export default Home;
