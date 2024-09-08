import phone from "../assets/phone.png"
import message from "../assets/message.png"

export function SectionSeis() {
    return (
        <section className="relative bg-blue-800 bg-cover bg-center">
            <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-24 z-10 relative">

                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
                    <div className="flex-1 text-left">
                        <img src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1725666395/logo_pjxrb6.svg" alt="" className="inline-block" />
                        <p className="custom-title text-white inline-block">Soluciones a tu alcance</p>
                    </div>
                    <div className="text-1xl flex-1 text-left text-white flex flex-col items-start space-y-4">
                        <p>Bankok Dominicana, dedicados a ofrecer soluciones innovadoras, adaptadas a las necesidades de cada cliente.</p>
                        <div className="flex items-center space-x-2">
                            <img src={phone} alt="" />
                            <p>809-460-6060</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img src={message} alt="" />
                            <p>soporte@bk.com.do</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}
