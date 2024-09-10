import { Calendar } from "../assets/calendar-lines-pen";
import { Compliance } from "../assets/compliance-document";
import { CalendalClock } from "../assets/calendar-clock";
import banner from "../assets/Banner.png"

import { CardSecDos } from "./cardSecDos";
import { CalendarSalary } from "../assets/calendar-salary";

interface Sect {
    tittle: string;
}

export function SectionDos({ tittle }: Sect) {
    return (
        <section className="relative bg-orange-600 bg-cover bg-center">
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725758586/circulo_pygm5x.png')] bg-no-repeat bg-contain"
                    style={{ top: '10%', left: '10%' }}
                ></div>
                <div
                    className="absolute top-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725758769/cuadrado_hxw26e.png')] bg-no-repeat bg-contain"
                    style={{ top: '20%', right: '10%' }}
                ></div>
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725758892/triangulo_syzmcj.png')] bg-no-repeat bg-contain"
                    style={{ bottom: '10%', left: '20%' }}
                ></div>
                <div
                    className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725759144/exagono_v8u3a0.png')] bg-no-repeat bg-contain"
                    style={{ bottom: '20%', right: '20%' }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725759275/rumbus_lleevd.png')] bg-no-repeat bg-contain"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                ></div>
            </div>
            <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-24 min-h-screen z-10 relative">
                <div className="mb-20 lg:mt-0">
                    <h1 className="tittle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white text-center">
                        {tittle}
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-8 lg:space-y-0 space-y-8">
                    <div className="lg:w-1/2">
                        <img src={banner} alt="Banner" className="w-full h-auto" />
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <CardSecDos
                            tittle="Solicitud en línea gratis."
                            description="Aplica sin costo alguno desde la comodidad de tu hogar. No hay tarifas ocultas ni cargos por la solicitud."
                            svg={<Calendar />}
                        />
                        <CardSecDos
                            tittle="Proceso simple y seguro."
                            description="Nuestro proceso es fácil de seguir y tus datos están protegidos con los más altos estándares de seguridad."
                            svg={<Compliance />}
                        />
                        <CardSecDos
                            tittle="Respuesta en menos de 24 horas."
                            description="Recibe una respuesta rápida. Evaluamos tu solicitud y te damos una respuesta en menos de 24 horas."
                            svg={<CalendalClock />}
                        />
                        <CardSecDos
                            tittle="Pago semanal, quincenal o mensual."
                            description="Elige cómo prefieres pagar semanal, quincenal o mensual. Adaptamos el plan de pagos a tus necesidades"
                            svg={<CalendarSalary />}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
