import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Ingeniero Electricista + IA',
  description: 'Soluciones de tecnología e IA para profesionales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Header/Navegación */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <img src="/robot-icon.png" alt="El Inge Robot" className="h-10 w-10" />
              EL INGE: SMART GRIDS
            </Link>

            {/* Menú */}
            <ul className="flex gap-8 list-none">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 font-medium hover:text-blue-600 transition"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido de la página */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="opacity-70">
              © 2024 Tu Nombre. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}