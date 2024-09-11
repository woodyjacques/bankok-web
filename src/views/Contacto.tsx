import { Footer } from "../components/footer";
import { SectionSeis } from "../components/sectionSeis";
import HeaderContacto from "../components/headerContacto";
import { FaceNegro } from "../assets/face-negro";
import { InstNegro } from "../assets/inst-negro";
import { LinNegro } from "../assets/Linkedin-negro";
import { TwitterNegro } from "../assets/twitter-negro";
import { MessageNegro } from "../assets/message-negro";
import { PhoneNegro } from "../assets/phone-negro";

function Contacto() {

    return (
        <div>
            <HeaderContacto />
            <section className="relative bg-blue-400 bg-cover bg-center">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757719/rhombus_xpbm6z.svg')] bg-no-repeat bg-contain"
                        style={{ top: '5%', left: '5%' }}
                    ></div>
                    <div
                        className="absolute top-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757719/polygon_pifbmc.svg')] bg-no-repeat bg-contain"
                        style={{ top: '15%', right: '5%' }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757718/Pol%C3%ADgono_3_pxkjri.svg')] bg-no-repeat bg-contain"
                        style={{ bottom: '5%', left: '10%' }}
                    ></div>
                    <div
                        className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757717/circulo_v74ebw.svg')] bg-no-repeat bg-contain"
                        style={{ bottom: '15%', right: '10%' }}
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757717/cuadrado_vzjrlr.svg')] bg-no-repeat bg-contain"
                        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    ></div>
                </div>
                <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-64 h-96 z-10 relative flex flex-col lg:flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center px-4">
                        <p className="tittle text-white mb-4">Contacto</p>
                    </div>
                </div>
            </section>

            <div className="flex flex-col md:flex-row bg-gray-100 py-12 px-8 -mt-28">

                <div className="bg-white shadow-lg rounded-lg p-8 md:w-3/4 mt-46 relative z-10">
                    <div className=" mb-10 mt-10">
                        <div className=" text-left mb-6 w-120">
                            <p className="tittle text-4xl font-bold mb-4">Formulario de consulta</p>
                            <p className="text-aonik-1 text-lg text-gray-500 mb-2"> 
                                ¿Quieres saber más? Puedes enviarnos un correo electrónico en cualquier momento.
                            </p>
                            <a href="mailto:soporte@bk.com.do" className="text-aonik-1 text-red-600 font-bold text-orange-500">soporte@bk.com.do</a>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="nombre"
                                    id="nombre"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="nombre"
                                    className="absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nombre
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    name="apellido"
                                    id="apellido"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="apellido"
                                    className="absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Apellido
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="tel"
                                    name="telefono"
                                    id="telefono"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="telefono"
                                    className="absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Número de teléfono
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Correo electrónico
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group col-span-full">
                                <textarea
                                    name="mensaje"
                                    id="mensaje"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
                                    placeholder=" "
                                    required
                                ></textarea>
                                <label
                                    htmlFor="mensaje"
                                    className="absolute text-sm text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Mensaje
                                </label>
                            </div>
                            <div className="col-span-full text-center">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-blue-600 text-white font-bold py-2 px-10 rounded-lg hover:bg-blue-700 transition-all"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="md:w-1/3 p-8 mt-20">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <p className="text-aonik-1 text-lg font-bold mb-4">DIRECCION</p>
                        <p className="text-aonik-1 font-bold text-sm mb-4">Calle independencia, No 83, Piso 302<br />Esquina 19 de marzo, Las Matas de Farfán<br /><a href="#" className="text-black hover:text-orange-500">Encontrar en el mapa →</a></p>
                        <div className="hover:text-orange-500 text-aonik-1 flex items-center space-x-2 mb-4">
                            <PhoneNegro />
                            <p className="text-aonik-1 font-bold text-sm">809-460-6060</p>
                        </div>
                        <div className="hover:text-orange-500 flex items-center space-x-2">
                            <MessageNegro />
                            <p className="text-aonik-1 font-bold text-sm">soporte@bk.com.do</p>
                        </div>

                        <div className=" mt-4 flex space-x-4">
                            <div className="bg-white hover:bg-orange-500 rounded-full p-2"><FaceNegro /></div>
                            <div className="bg-white hover:bg-orange-500 rounded-full p-2"><InstNegro /></div>
                            <div className="bg-white hover:bg-orange-500 rounded-full p-2"><LinNegro /></div>
                            <div className="bg-white hover:bg-orange-500 rounded-full p-2"><TwitterNegro /></div>
                        </div>
                    </div>
                </div>
            </div>



            <SectionSeis />
            <Footer />
        </div>
    );
}

export default Contacto;
