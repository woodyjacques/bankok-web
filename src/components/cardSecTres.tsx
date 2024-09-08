import { useState } from "react";
import { Abrir, Cerrar } from "../assets/abrir";

interface Card {
    tittle: string;
    description: string;
}

export function CardSecTres({ tittle, description }: Card) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDescription = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`p-4 border-b border-b-gray-400 transition-all duration-300 mb-6`}>
            <div className="flex items-center justify-between">
                <h5 className="text-2xl font-bold tracking-tight text-white">
                    {tittle}
                </h5>
                <button
                    onClick={toggleDescription}
                    className="text-white ml-4 focus:outline-none p-2 rounded transition-colors duration-300"
                >
                    <span
                        className={`inline-block transition-colors duration-300 ${isOpen ? 'text-white' : 'hover:text-red-500'}`}
                    >
                        {isOpen ? <Cerrar /> : <Abrir />}
                    </span>
                </button>
            </div>
            <div
                className={`mt-2 text-lg text-white transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[200px]' : 'max-h-0'}`}
            >
                {description}
            </div>
        </div>
    );
}