function FormPhone() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg overflow-y-auto max-h-screen">
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
    );
}

export default FormPhone;
