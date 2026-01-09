export default function About() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section con Imagen de Fondo */}
            <div className="relative h-[500px] w-full bg-gray-900">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/about-hero.jpg')" }}
                >
                    {/* Overlay oscuro para mejorar legibilidad */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
                    <h1 className="text-6xl font-bold mb-4">
                        Sobre Mí
                    </h1>
                    <p className="text-2xl font-light text-gray-200 max-w-2xl">
                        Ingeniero Electricista + Desarrollador de IA
                    </p>
                </div>
            </div>

            {/* Contenido Principal */}
            <div className="max-w-4xl mx-auto px-6 py-16 -mt-20 relative z-10">
                <div className="bg-white rounded-xl shadow-xl p-10 space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Edwin Alberto Quintero Henao
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                    </div>

                    <div className="prose prose-lg text-gray-700">
                        <p>
                            Soy un profesional apasionado que vive en la intersección entre la
                            <strong> ingeniería eléctrica tradicional</strong> y la
                            <strong> inteligencia artificial moderna</strong>.
                        </p>
                        <p>
                            Con una sólida formación académica y años de experiencia en el campo,
                            me he especializado en transformar problemas complejos de energía
                            en soluciones eficientes y automatizadas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">
                                ⚡ Ingeniería Eléctrica
                            </h3>
                            <ul className="space-y-2 text-blue-800">
                                <li>• Diseño de Sistemas de Potencia</li>
                                <li>• Energías Renovables (Solar)</li>
                                <li>• Smart Grids</li>
                                <li>• Eficiencia Energética</li>
                            </ul>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                            <h3 className="text-xl font-bold text-indigo-900 mb-3">
                                🤖 Inteligencia Artificial
                            </h3>
                            <ul className="space-y-2 text-indigo-800">
                                <li>• Automatización de Procesos</li>
                                <li>• Análisis de Datos Energéticos</li>
                                <li>• Desarrollo Full Stack</li>
                                <li>• Machine Learning Aplicado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}