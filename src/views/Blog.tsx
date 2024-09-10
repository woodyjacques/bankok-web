import { Footer } from "../components/footer";
import { SectionSeis } from "../components/sectionSeis";
import woman from "../assets/woman.png";
import blogImage from "../assets/blogImage.png"
import { CardSecCinco } from "../components/cardSecCinco";


function Blog() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 ">
            <div className="flex-grow relative z-0">
                <div className="bg-blue-400 flex flex-col items-center justify-center text-center relative h-96">
                    <img
                        src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1725666395/logo_pjxrb6.svg"
                        alt="Logo"
                        className="absolute top-4 left-4 md:top-6 md:left-6"
                    />
                    <div className="flex flex-col items-center justify-center px-4">
                        <p className="tittle text-white mb-4">Blog</p>
                    </div>
                </div>
                <div className="relative flex justify-center my-4 -mt-28">
                    <div className="relative w-4/5 h-auto">
                        <img
                            src={woman}
                            alt="Blog"
                            className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-transparent to-transparent"></div>

                        <div className="md:hidden absolute inset-x-0 bottom-0 flex flex-col items-start px-4 py-2 z-10 w-full text-left">
                            <p className="tittle-2 text-white text-sm">Los mejores cursos para aprender de finanzas personales</p>
                            <p className="text-aonik-2 text-white text-xs">June 26, 2024</p>
                        </div>
                    </div>

                    <div className="hidden md:flex absolute inset-x-0 bottom-0 flex-col items-start px-4 py-2 z-10 md:w-2/3 md:ml-36">
                        <p className="tittle-2 text-white text-left">Los mejores cursos para aprender de finanzas personales</p>
                        <p className="text-aonik-2 text-white text-left">June 26, 2024</p>
                    </div>
                </div>

                <div className="bg-gray-100 mt-36 mb-36 flex flex-wrap gap-8 justify-center text-center">
                    <CardSecCinco
                        tittle="Los mejores cursos para aprender de finanzas personales"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <CardSecCinco
                        tittle="Por qué es importante la educación financiera"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <CardSecCinco
                        tittle="Guía para elegir el mejor préstamo personal"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <CardSecCinco
                        tittle="Los mejores cursos para aprender de finanzas personales"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <CardSecCinco
                        tittle="Por qué es importante la educación financiera"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <CardSecCinco
                        tittle="Guía para elegir el mejor préstamo personal"
                        description="June 26, 2024"
                        image={blogImage}
                    />
                    <div className="w-full font-bold flex justify-center mt-8">
                        <button className="text-aonik-1 text-black bg-white py-2 px-16 rounded-[10px]">Ver más</button>
                    </div>
                </div>
                <SectionSeis />
                <Footer />
            </div>
        </div>
    );
}

export default Blog;
