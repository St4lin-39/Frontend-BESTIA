import {Layout} from "../components/Layout"

export function Admin() {

    const handleOpenDoor = () => {

        alert("Comando MQTT enviado")
    }

    const handleDownloadData = () => {

        alert("Extrayendo datos...")
    }

    return (

        <Layout>

            <div className="admin-container">

                <h1>Panel Administrador</h1>

                <div className="admin-buttons">

                    <button
                        className="primary-button"
                        onClick={handleOpenDoor}
                    >
                        Abrir Sala
                    </button>

                    <button
                        className="primary-button"
                        onClick={handleDownloadData}
                    >
                        Descargar Registros
                    </button>

                </div>

                <div className="json-viewer">

                    <h3>Datos del sistema</h3>

                </div>

            </div>

        </Layout>
    )
}

