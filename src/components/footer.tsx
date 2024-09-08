import { Facebook } from "../assets/facebook";
import { Instagram } from "../assets/instagram";
import { Linkedin } from "../assets/Linkedin";
import { Twitter } from "../assets/twitter";

export function Footer() {
    return (
        <section className="relative bg-blue-900 bg-cover bg-center">
            <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative pt-6">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="text-xl font-semibold list-none mb-4">Soluciones</li>
                            <li className="mb-2">Préstamo Personal</li>
                            <li className="mb-2">Préstamo Hipotecario</li>
                            <li className="mb-2">Préstamo Prendario</li>
                            <li className="mb-2">Financiamiento Automotriz</li>
                            <li className="mb-2">Simulador de préstamo</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="text-xl font-semibold list-none mb-4">Inversiones</li>
                            <li className="mb-2">Quiero prestar</li>
                            <li className="mb-2">¿Cómo funciona?</li>
                            <li className="mb-2">Preguntas frecuentes</li>
                            <li className="mb-2">Dónde invertir</li>
                            <li className="mb-2">Simulador de inversiones</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="text-xl font-semibold list-none mb-4">Páginas</li>
                            <li className="mb-2">Servicios</li>
                            <li className="mb-2">Blog</li>
                            <li className="mb-2">Contacto</li>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col items-start space-y-2">
                        <p className="text-xl font-semibold">Síguenos</p>
                        <div className="flex items-center space-x-2">
                            <Facebook />
                            <p>Facebook</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Instagram />
                            <p>Instagram</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Linkedin />
                            <p>Linkedin</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Twitter />
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
            <span className="block text-sm sm:text-center text-gray-400">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex-1 mb-4 sm:mb-0">
                        <p>Todos los derechos reservados © Bankok Dominicana, SRL</p>
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
                        <p>Políticas de Privacidad</p>
                        <p>Condiciones de uso</p>
                        <p>Políticas de Cookies</p>
                        <p>Aviso Legal</p>
                    </div>
                </div>
            </span>
        </section>
    );
}