export default function Services() {
    const services = [
        {
            title: "Análisis de Contratos con IA",
            description: "Sistema que analiza automáticamente contratos, extrae cláusulas importantes y detecta riesgos.",
            price: "$2,500/mes",
            icon: "📄"
        },
        {
            title: "Chatbot IA para Consultas",
            description: "Asistente inteligente que responde preguntas de tus clientes 24/7 de manera automática.",
            price: "$2,000/mes",
            icon: "💬"
        },
        {
            title: "App Cotizador Eléctrico",
            description: "Aplicación para generar cotizaciones profesionales de proyectos eléctricos en segundos.",
            price: "$1,500/mes",
            icon: "⚡"
        },
        {
            title: "Diseño de Energía Solar",
            description: "Diseño e implementación de sistemas solares optimizados para tu negocio.",
            price: "Desde $10,000",
            icon: "☀️"
        },
        {
            title: "Desarrollo Web Personalizado",
            description: "Sitios web profesionales adaptados a tu negocio con integración de IA.",
            price: "Desde $3,000",
            icon: "🌐"
        },
        {
            title: "Consultoría IA",
            description: "Asesoramiento experto en cómo implementar IA en tu negocio de forma rentable.",
            price: "$200/hora",
            icon: "🤖"
        }
    ]

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-4 text-center">
                    Mis Servicios
                </h1>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Soluciones de tecnología e IA especializadas para profesionales
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition transform hover:scale-105"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {service.description}
                            </p>
                            <p className="text-lg font-bold text-blue-600">
                                {service.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-blue-600 text-white rounded-lg shadow-lg p-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        ¿Listo para transformar tu negocio?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Contáctame para una consulta gratis de 30 minutos
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition inline-block"
                    >
                        Solicitar Consulta
                    </a>
                </div>
            </div>
        </main>
    )
}