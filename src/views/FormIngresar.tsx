
import womanA from "../assets/womanA.png";

function FormIngresar() {

    return (
        <div className=" w-full max-w-4xl h-auto lg:h-auto flex flex-col lg:flex-row rounded-lg shadow-lg">

            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
                <img
                    src={womanA}
                    alt="Beneficios"
                    className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none z-20"
                />

                <div className="absolute z-20 text-white p-8 -top-8">
                    <h2 className="text-3xl font-bold mb-6">Beneficios de nuestros préstamos</h2>
                    <ul className="space-y-4 text-lg">
                        <li>✔ Solicitud en línea gratis.</li>
                        <li>✔ Proceso simple y seguro.</li>
                        <li>✔ Respuesta en menos de 24 horas.</li>
                        <li>✔ Su historial no importa.</li>
                    </ul>
                </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col justify-center items-start relative max-h-screen lg:max-h-[100vh] overflow-auto">

                <div className="bg-white rounded-lg p-4 max-w-md w-full mt-64">
                    <h2 className="text-2xl font-bold mb-6">Solicitar un préstamo</h2>
                    <p className="text-sm text-gray-500 mb-6">
                        Tus datos.<br />Completa con los datos del solicitante.
                    </p>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
                        <input
                            type="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Apellido</label>
                        <input
                            type="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Correo Electrónico</label>
                        <input
                            type="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Número de Cédula</label>
                        <input
                            type="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Teléfono Móvil</label>
                        <input
                            type="tel"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <p className="text-sm text-gray-500 mb-6">Datos del préstamo.<br />Completa con los datos del préstamo.</p>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Escribe el monto solicitado</label>
                        <input
                            type="text"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Plazo</label>
                        <select
                            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Seleccione un plazo</option>
                            <option value="6_meses">6 meses</option>
                            <option value="12_meses">12 meses</option>
                            <option value="24_meses">24 meses</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Enviar solicitud
                    </button>

                    <div className="flex items-start mt-2">
                        <div className="flex items-center h-5">
                            <input
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <label className="ml-2 text-sm font-medium text-gray-900">
                            Al continuar, estoy de acuerdo con los <a href="#" className="text-blue-600 hover:underline">Términos y Condiciones</a> y la validación de mis datos para confirmar la veracidad.
                        </label>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FormIngresar;



