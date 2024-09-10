import { Facebook } from "../assets/facebook";
import { Instagram } from "../assets/instagram";
import { Linkedin } from "../assets/linkedin";
import { Twitter } from "../assets/twitter";

export function Footer() {
    return (
        <section className="relative bg-blue-900 bg-cover bg-center">
            <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative pt-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="text-xl font-semibold list-none mb-4">Soluciones</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Préstamo Personal</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Préstamo Hipotecario</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Préstamo Prendario</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Financiamiento Automotriz</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Simulador de préstamo</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="cabin-mediado text-xl font-semibold list-none mb-4">Inversiones</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Quiero prestar</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">¿Cómo funciona?</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Preguntas frecuentes</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Dónde invertir</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Simulador de inversiones</li>
                        </ul>
                    </div>
                    <div className="text-white">
                        <ul className="space-y-2 list-disc pl-5">
                            <li className="cabin-mediado text-xl font-semibold list-none mb-4">Páginas</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Nosotros</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Servicios</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Blog</li>
                            <li className="hover:text-red-500 text-aonik-1 mb-2">Contacto</li>
                        </ul>
                    </div>
                    <div className="text-white flex flex-col items-start space-y-2">
                        <p className="cabin-mediado text-xl font-semibold">Síguenos</p>

                        <div className="text-aonik-1 flex items-center space-x-2">
                            <div className="cursor-pointer hover:bg-blue-500 bg-blue-600 p-2 rounded"><Facebook /></div>
                            <p>Facebook</p>
                        </div>

                        <div className="text-aonik-1 flex items-center space-x-2">
                            <div className="cursor-pointer hover:bg-blue-500 bg-blue-600 p-2 rounded"><Instagram /></div>
                            <p>Instagram</p>
                        </div>

                        <div className="text-aonik-1 flex items-center space-x-2">
                            <div className="cursor-pointer hover:bg-blue-500 bg-blue-600 p-2 rounded"><Linkedin /></div>
                            <p>Linkedin</p>
                        </div>

                        <div className="text-aonik-1 flex items-center space-x-2">
                            <div className="cursor-pointer hover:bg-blue-500 bg-blue-600 p-2 rounded"><Twitter /></div>
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-2 sm:mx-auto border-gray-800 lg:my-5" />
            <span className="block text-sm sm:text-center text-gray-400">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="text-aonik-1 text-white flex-1 mb-4 sm:mb-0">
                        <p>Todos los derechos reservados © Bankok Dominicana, SRL</p>
                    </div>
                    <div className="text-aonik-1 text-white flex-1 flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
                        <a href="/politicas" className="hover:text-red-500">Políticas de Privacidad</a>
                        <a href="#" className="hover:text-red-500">Condiciones de uso</a>
                        <a href="#" className="hover:text-red-500">Políticas de Cookies</a>
                        <a href="#" className="hover:text-red-500">Aviso Legal</a>
                    </div>
                </div>
            </span>
        </section>
    );
}