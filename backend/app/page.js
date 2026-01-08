export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Ingeniero Electricista + IA
            </h1>
            <p className="text-2xl mb-8 opacity-90 leading-relaxed">
              Transformo tu negocio con soluciones de inteligencia artificial
              y tecnología especializada en electricidad.
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition text-lg"
              >
                Contactarme
              </a>
              <a
                href="/services"
                className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition text-lg border-2 border-white"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            ¿Por qué elegirme?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expertise Dual
              </h3>
              <p className="text-gray-700">
                Entiendo electricidad Y programación. Único en mi mercado.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                IA de Punta
              </h3>
              <p className="text-gray-700">
                Soluciones con tecnología de inteligencia artificial más avanzada.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ROI Garantizado
              </h3>
              <p className="text-gray-700">
                Ahorras dinero desde el primer mes con automatización inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            ¿Tu negocio necesita modernización?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Te ayudo a implementar soluciones de IA que aumenten tus ganancias
            y reduzcan costos operacionales.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-blue-700 transition text-lg inline-block"
          >
            Agendar Consulta Gratis
          </a>
        </div>
      </section>
    </main>
  )
}