export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-8">
                    Contacto 3173662752 samuel160612@gmail.com

                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulario */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Envíame un mensaje
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Edwin Alberto Quintero Henao
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    samuel160612@gmail.com
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="juan@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>

                    {/* Información de contacto */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                📧 Email
                            </h3>
                            <p className="text-lg text-gray-700">
                                contacto@tudominio.com
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                📱 Teléfono
                            </h3>
                            <p className="text-lg text-gray-700">
                                +57 317 366 2752
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                📍 Ubicación
                            </h3>
                            <p className="text-lg text-gray-700">
                                Pereira, Risaralda, Colombia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}