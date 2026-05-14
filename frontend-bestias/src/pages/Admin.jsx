import { useState } from "react"
import { Layout } from "../components/Layout"
import { getReadings, openRoom } from "../services/api"

export function Admin() {
    const [readings, setReadings] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleViewReadings = async () => {
        try {
            setLoading(true)
            setMessage("")

            const data = await getReadings()
            setReadings(data)

        } catch (error) {
            console.error(error)
            setMessage("Error al traer los intentos")
        } finally {
            setLoading(false)
        }
    }

    const handleOpenRoom = async () => {
        try {
            setLoading(true)
            setMessage("")

            await openRoom("Salon101")

            setMessage("Sala abierta correctamente")

            const data = await getReadings()
            setReadings(data)

        } catch (error) {
            console.error(error)
            setMessage("Error al abrir la sala")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Layout>
            <div className="admin-container">
                <h1>Panel Administrador</h1>

                <div className="admin-buttons">
                    <button
                        className="primary-button"
                        onClick={handleViewReadings}
                    >
                        Ver intentos
                    </button>

                    <button
                        className="primary-button"
                        onClick={handleOpenRoom}
                    >
                        Abrir Sala
                    </button>
                </div>

                {loading && <p>Cargando...</p>}

                {message && <p>{message}</p>}

                <div className="json-viewer">
                    <h3>Datos del sistema</h3>

                    <pre>
                        {JSON.stringify(readings, null, 2)}
                    </pre>
                </div>
            </div>
        </Layout>
    )
}