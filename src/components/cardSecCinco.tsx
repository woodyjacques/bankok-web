interface Card {
    tittle: string;
    description: string;
    image: string;
}

export function CardSecCinco({ tittle, description, image }: Card) {
    return (
        <div className="max-w-sm bg-white rounded-lg">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className=" text-aonik-2 mb-2 text-2xl font-bold tracking-tight text-gray-900">{tittle}</h5>
                </a>
                <p className="text-aonik-1 mt-20 font-normal text-gray-700">{description}</p>
            </div>
        </div>
    );
}

