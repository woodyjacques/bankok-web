import Header from "../components/header";
import { Section } from "../components/section";

function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow">
        <Header />
        <Section
          tittle="Haz realidad tus planes con un préstamo Bk, fácil y al instante."
          description="Resuelve tus urgencias financieras en minutos y disfruta tu crédito en lo que más te gusta. ¡Así de fácil!"
        />

      </div>
    </div>
  );
}

export default Home;
