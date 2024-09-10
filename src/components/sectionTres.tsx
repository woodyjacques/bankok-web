import { CardSecTres } from "./cardSecTres";

interface Sect {
    tittle: string;
    description: string;
    email: string;
}

export function SectionTres({ tittle, description, email }: Sect) {
    return (
        <section className="relative bg-blue-700 bg-cover bg-center overflow-hidden rounded-custom-large">
            <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-24 min-h-screen z-10 relative flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="tittle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white">
                        {tittle}
                    </h1>
                    <p className="text-aonik-3 text-lg font-normal lg:text-xl text-white">
                        {description}
                    </p>
                    <p className="text-aonik-3 text-lg font-normal lg:text-xl text-orange-500 p-2 lg:text-2xl">
                        {email}
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                    <CardSecTres
                        tittle="¿Qué es Bankok?"
                        description="Bankok es una empresa de servicios financieros dedicada a ofrecer préstamos personales diseñados para satisfacer las necesidades financieras de nuestros usuarios. Nos enfocamos en proporcionar soluciones rápidas, eficientes y seguras para ayudarte a alcanzar tus metas económicas."
                    />
                    <CardSecTres
                        tittle="¿Cómo solicito un Préstamo personal?"
                        description="Solicitar un préstamo personal con Bankok es fácil y rápido. Sigue estos tres sencillos pasos: 1 Completa el formulario en línea: Rellena nuestro formulario con tus datos básicos. Es rápido y sin complicaciones. 2 Obtén la aprobación en minutos: Nuestro sistema revisará tu solicitud de inmediato y te daremos una respuesta en cuestión de minutos. 3 Recibe el desembolso inmediato: Una vez aprobada tu solicitud, el dinero será transferido a tu cuenta de forma inmediata para que puedas disponer de él cuando lo necesites."
                    />
                    <CardSecTres
                        tittle="¿Qué necesito para pedir un préstamo?"
                        description="Para solicitar un préstamo con Bankok, solo necesitas contar con una garantía. Esta puede ser un vehículo a tu nombre, un inmueble o cualquier artículo de valor. De esta manera, aseguramos que el proceso sea accesible y rápido para ti."
                    />
                    <CardSecTres
                        tittle="¿Cómo se pagan los Préstamos Bk?"
                        description="Pagar tus préstamos BK es muy conveniente. Ofrecemos dos métodos de pago: 1 Transferencia bancaria: Realiza tus pagos de manera segura y cómoda desde tu cuenta bancaria. 2 Efectivo: Si prefieres, puedes realizar tus pagos en efectivo en nuestras oficinas o puntos de pago autorizados."
                    />
                    <CardSecTres
                        tittle="¿Cuál es la penalidad por saldo anticipado?"
                        description="En Bankok no penalizamos el pago anticipado de tus préstamos. Puedes liquidar tu saldo en cualquier momento sin incurrir en cargos adicionales, lo que te permite ahorrar en intereses y gestionar tus finanzas de manera flexible."
                    />
                    <CardSecTres
                        tittle="¿Cuáles son los medios de pago de las cuotas?"
                        description="Via Transferencia bancaria: Realiza tus pagos de manera segura y cómoda desde tu cuenta bancaria. Efectivo: Si prefieres, puedes realizar tus pagos en efectivo en nuestras oficinas o puntos de pago autorizados."
                    />
                    <CardSecTres
                        tittle="¿Cómo me comunico con Bankok?"
                        description="Estamos aquí para ayudarte con cualquier duda o consulta. Puedes comunicarte con nosotros a través de las siguientes vías: Correo electrónico: Escríbenos a soporte@bankok.com y te responderemos lo antes posible. Teléfono: Llámanos al 809-460-6060 para hablar directamente con uno de nuestros representantes de atención al cliente No dudes en contactarnos. ¡Estamos para servirte!"
                    />
                </div>
            </div>
        </section>
    );
}
