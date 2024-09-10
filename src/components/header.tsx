import { useState } from "react";
import logo from "../assets/logo.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-blue-500 fixed w-full z-20 top-0 start-0 border-blue-900 font-aeonik">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src={logo}
                        className="h-8"
                        alt="Bankok logo"
                    />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <a href="/login">
                        <button
                            type="button"
                            className="text-header text-white bg-blue-900 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-12 py-2"
                        >
                            Ingresar
                        </button>
                    </a>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-blue-800 focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-900 rounded-lg bg-blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a
                                href="#beneficios"
                                className="text-header text-lg lg:text-xl relative block py-2 px-3 text-white rounded group"
                            >
                                Beneficios
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#como-funciona"
                                className="text-header text-lg font-normal lg:text-xl relative block py-2 px-3 text-white rounded group"
                            >
                                ¿Cómo funciona?
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#preguntas-frecuentes"
                                className="text-header text-lg font-normal lg:text-xl relative block py-2 px-3 text-white rounded group"
                            >
                                Preguntas frecuentes
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-red-500 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
