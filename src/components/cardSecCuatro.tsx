import { starr } from "../assets/starr";

interface Card {
    tittle: string;
    description: string;
    imagen: string;
    tittle2: string;
}

export function CardSecCuatro({ tittle, description, imagen, tittle2 }: Card) {
    return (
        <div className="mr-30 max-w-md p-6 rounded-lg">
            <div className="mb-6 flex flex-col items-center mr-20">
                <div className="flex items-center">
                    <img src={imagen} alt="" className="w-12 h-12 object-cover mr-4" />
                    <div className="flex flex-col items-start">
                        <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, index) => (
                                <div key={index} className="mr-1">
                                    {starr()}
                                </div>
                            ))}
                        </div>
                        <a href="#">
                            <h5 className="text-aonik-3 text-xl font-bold tracking-tight text-black mr-4">{tittle}</h5>
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-aonik-1 mb-3 font-normal text-gray-500">
                {description}
            </p>
            <p className="text-aonik-2 inline-flex font-bold items-center text-blue-600">
                {tittle2}
            </p>
        </div>
    );
}
