'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            // Usar variable de entorno o fallback a localhost:8000
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
            const response = await fetch(`${apiUrl}/api/contacts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                // Intentar leer el mensaje de error del backend
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.detail || 'Error al enviar mensaje')
            }

            const data = await response.json()
            console.log('Mensaje guardado:', data)

            // Limpiar formulario
            setFormData({
                nombre: '',
                email: '',
                mensaje: ''
            })
            setSuccess(true)

            // Ocultar mensaje de éxito después de 3 segundos
            setTimeout(() => setSuccess(false), 3000)

        } catch (err) {
            setError(err.message)
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-8">
                    Contacto
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulario */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Envíame un mensaje
                        </h2>

                        {/* Mensaje de éxito */}
                        {success && (
                            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                                ✅ ¡Mensaje enviado correctamente! Te contactaré pronto.
                            </div>
                        )}

                        {/* Mensaje de error */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                                ❌ Error: {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tu nombre
                                </label>
                                <input
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tu email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                    placeholder="juan@ejemplo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
                            >
                                {loading ? 'Enviando...' : 'Enviar Mensaje'}
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
                                +57 300 123 4567
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                📍 Ubicación
                            </h3>
                            <p className="text-lg text-gray-700">
                                Cartago, Valle del Cauca, Colombia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}