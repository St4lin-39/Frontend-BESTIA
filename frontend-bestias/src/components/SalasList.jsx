import {salas} from "../data/salas"
import {SalaCard} from "./SalaCard"

export function SalasList({ setSalaSeleccionada}) {

    return (

        <div className="salas-container">

            {
                salas.map((sala) => (

                    <SalaCard
                        key={sala.id}
                        sala={sala}
                        setSalaSeleccionada = {setSalaSeleccionada}
                    />

                ))
            }

        </div>
    )
}

