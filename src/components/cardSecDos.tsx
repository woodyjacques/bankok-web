interface Card {
    tittle: string;
    description: string;
    svg: React.ReactNode;
}

export function CardSecDos({ tittle, description, svg }: Card) {
    return (
        <div>
            <a href="#" className="flex flex-col md:flex-row md:max-w-xl">
                <div className="flex-shrink-0 w-full h-40 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg flex items-center justify-center">
                    {svg}
                </div>
                <div className="flex flex-col justify-center leading-normal">
                    <h5 className="custom-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tittle}</h5>
                    <p className="mb-3 font-normal text-white">{description}</p>
                </div>
            </a>
        </div>
    );
}
