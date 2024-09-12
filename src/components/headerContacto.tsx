import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import FormIngresar from "../views/FormIngresar";
import FormPhone from "../views/FormPhone";

function HeaderContacto() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isModalOpen]);

    return (
        <nav className="bg-blue-400 fixed w-full z-20 top-0 start-0 border-blue-900 font-aeonik">
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
                    <button
                        type="button"
                        onClick={toggleModal}
                        className="text-header text-white bg-blue-900 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-12 py-2"
                    >
                        Ingresar
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-center z-50">
                    {isMobile ? <FormPhone /> : <FormIngresar />}
                    <button
                        onClick={toggleModal}
                        className="absolute bg-blue-600 top-4 right-4 text-white hover:text-red-500 text-2xl z-50 w-10 h-10 rounded-full flex justify-center items-center"
                    >
                        ✕
                    </button>
                </div>
            )}
        </nav>
    );
}

export default HeaderContacto;
