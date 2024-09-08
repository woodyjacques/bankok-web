interface Sect {
  tittle: string;
  description: string;
}

export function Section({ tittle, description }: Sect) {
  return (
    <section className="relative bg-blue-700 bg-cover bg-center">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725674013/b3ea9a7d-90b0-43ec-b950-98568731559a_zhumxt.png')] bg-no-repeat bg-contain"
          style={{ top: '10%', left: '10%' }}
        ></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725674013/8bcd5a68-f16e-4861-b06a-179098c5efed_s4sbcj.png')] bg-no-repeat bg-contain"
          style={{ top: '20%', right: '10%' }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725674013/45ae3934-883a-48f8-aad2-83c06e973532_x52bhy.png')] bg-no-repeat bg-contain"
          style={{ bottom: '10%', left: '20%' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725674013/f2352693-0aeb-4c1c-9385-e5921913748d_w1mosc.png')] bg-no-repeat bg-contain"
          style={{ bottom: '20%', right: '20%' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725674013/31d01aa4-db0f-42a4-9f73-92892588d8e7_zt7mpv.png')] bg-no-repeat bg-contain"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-64 min-h-screen z-10 relative flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="custom-title mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white">
            {tittle}
          </h1>
          <p className="text-lg font-normal lg:text-xl text-gray-200">
            {description}
          </p>

          <form className="mt-10 w-full">
            <div className="relative w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full p-8 ps-10 text-sm text-black border-gray-800 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Correo electrónico"
                required
              />
              <button
                type="submit"
                className="mb-1.5 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-4"
              >
                Solicita tu préstamo
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dol6yfeoi/image/upload/v1725671893/Captura_de_pantalla_2024-09-06_211632_ryz10w.png"
            alt="Descripción de la imagen"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
