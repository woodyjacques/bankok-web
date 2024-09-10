import image from "../assets/image.png"

interface Sect {
  tittle: string;
  description: string;
}

export function Section({ tittle, description }: Sect) {
  return (
    <section className="relative bg-blue-500 bg-cover bg-center">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757719/rhombus_xpbm6z.svg')] bg-no-repeat bg-contain"
          style={{ top: '10%', left: '10%' }}
        ></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757719/polygon_pifbmc.svg')] bg-no-repeat bg-contain"
          style={{ top: '20%', right: '10%' }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757718/Pol%C3%ADgono_3_pxkjri.svg')] bg-no-repeat bg-contain"
          style={{ bottom: '10%', left: '20%' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757717/circulo_v74ebw.svg')] bg-no-repeat bg-contain"
          style={{ bottom: '20%', right: '20%' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[url('https://res.cloudinary.com/dol6yfeoi/image/upload/v1725757717/cuadrado_vzjrlr.svg')] bg-no-repeat bg-contain"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        ></div>
      </div>
      <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-64 min-h-screen z-10 relative flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="tittle mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white">
            {tittle}
          </h1>
          <p className="text-header text-lg lg:text-xl text-gray-200">
            {description}
          </p>

          <form className="mt-10 w-full">
            <div className="relative w-full">
              <input
                type="search"
                id="default-search"
                className="text-aonik-2 block w-full p-8 ps-10 text-sm text-black border-gray-800 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Correo electrónico"
                required
              />
              <button
                type="submit"
                className="font-bold text-aonik-2 mb-1.5 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-8 py-4"
              >
                Solicita tu préstamo
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={image}
            alt="Descripción de la imagen"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
