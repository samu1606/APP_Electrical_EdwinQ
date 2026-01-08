export default function About() {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-8">
                    EDWIN ALBERTO QUINTERO HENAO
                </h1>

                <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Soy Ingeniero Electricista especializado en diseño de sistemas
                        de energía solar y soluciones de automatización con IA.
                    </p>

                    <p className="text-xl text-gray-700 leading-relaxed">
                        Combino 3+ años de experiencia en electricidad con tecnología
                        de punta en inteligencia artificial, ofreciendo soluciones
                        innovadoras y prácticas para profesionales.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                        Mis Servicios
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                        <li>Diseño de sistemas de energía solar</li>
                        <li>Soluciones de IA para negocios</li>
                        <li>Desarrollo de aplicaciones web y móvil</li>
                        <li>Automatización eléctrica inteligente</li>
                    </ul>
                </div>
            </div>
        </main>
    )
}