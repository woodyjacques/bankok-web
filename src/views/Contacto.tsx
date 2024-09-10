import { Footer } from "../components/footer";
import { SectionSeis } from "../components/sectionSeis";

function Contacto() {

    return (
        <div className="flex flex-col min-h-screen bg-orange-600">
            <div className="flex-grow">
                <div className="bg-blue-400 flex flex-col items-center justify-center text-center relative h-screen">
                    <img
                        src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1725666395/logo_pjxrb6.svg"
                        alt=""
                        className="absolute top-4 left-4 md:top-6 md:left-6"
                    />
                    <div className="h-1/3 flex flex-col items-center justify-center px-4">
                        <p className="tittle text-white mb-4">Error 404</p>
                        <a href="/" className=" text-aonik-2 text-white">Regresar a Inicio</a>
                    </div>
                </div>
                <SectionSeis />
                <Footer />
            </div>
        </div>
    );
}

export default Contacto;
