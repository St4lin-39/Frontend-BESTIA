import {Layout} from "../components/Layout"
import {SalasList} from "../components/SalasList"

export function Reservas() {

    return (

        <Layout>

            <h1 className="page-title">
                Salas Disponibles
            </h1>

            <SalasList />

        </Layout>
    )
}

