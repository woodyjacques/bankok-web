import { Poli } from "../components/components/poli";
import { PoliCinco } from "../components/components/poliCinco";
import { PoliCuatro } from "../components/components/poliCuatro";
import { PoliDiez } from "../components/components/poliDiez";
import { PoliDos } from "../components/components/poliDos";
import { PoliNueve } from "../components/components/poliNueve";
import { PoliOcho } from "../components/components/poliOcho";
import { PoliSeis } from "../components/components/poliSeis";
import { PoliSiete } from "../components/components/poliSiete";
import { PoliTres } from "../components/components/poliTres";
import { PoliUno } from "../components/components/poliUno";
import { Footer } from "../components/footer";
import { SectionSeis } from "../components/sectionSeis";

function Politicas() {

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="bg-blue-400 flex flex-col items-center justify-center text-center relative h-96">
                    <img
                        src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1725666395/logo_pjxrb6.svg"
                        alt=""
                        className="absolute top-4 left-4 md:top-6 md:left-6"
                    />
                    <div className="mt-20 h-1/2 flex flex-col items-center justify-center px-4">
                        <p className="tittle text-white mb-4">Políticas de Privacidad</p>
                        <h1 className=" text-aonik-2 text-white">Última Actualización: Noviembre de 2024</h1>
                    </div>
                </div>
                <div className="bg-gray-200">
                    <div className="px-4 md:px-20 py-8">
                        <Poli />
                        <PoliUno />
                        <PoliDos />
                        <PoliTres />
                        <PoliCuatro />
                        <PoliCinco />
                        <PoliSeis />
                        <PoliSiete />
                        <PoliOcho />
                        <PoliNueve />
                        <PoliDiez />
                    </div>
                </div>

                <SectionSeis />
                <Footer />
            </div>
        </div>
    );
}

export default Politicas;
