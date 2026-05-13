import { useState } from "react"
import {Layout} from "../components/Layout"
import {SalasList} from "../components/SalasList"
import { ReservaForm } from "../components/ReservaForm"

export function Reservas() {
    const[salaSeleccionada, setSalaSeleccionada] = useState(null)

    return (

        <Layout>

            <h1 className="page-title">
                Salas Disponibles
            </h1>

            <SalasList 
                setSalaSeleccionada = {setSalaSeleccionada}
                />
                {
                    salaSeleccionada && (
                        <ReservaForm
                            sala = {salaSeleccionada}
                            />
                    )
                }

        </Layout>
    )
}

