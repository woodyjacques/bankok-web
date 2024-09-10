interface Card {
    tittle: string;
    description: string;
    svg: React.ReactNode;
    bgColor: string;
}

export function CardSecUno({ tittle, description, svg, bgColor }: Card) {
    return (
        <div className="hover:bg-red-100 max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow">
            <div className={`mb-6 w-14 h-14 ${bgColor} rounded-full flex items-center justify-center`}>
                <div className="w-7 h-7 flex items-center justify-center">
                    {svg}
                </div>
            </div>
            <a href="#">
                <h5 className="text-aonik-3 mb-2 font-bold text-2xl text-black">{tittle}</h5>
            </a>
            <p className="mb-3 text-aonik-2 text-gray-500">{description}</p>
            <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                <svg className="w-5 h-5 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
            </a>
        </div>
    );
}

