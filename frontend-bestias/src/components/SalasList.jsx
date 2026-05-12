import {salas} from "../data/salas"
import {SalaCard} from "./SalaCard"

export function SalasList() {

    return (

        <div className="salas-container">

            {
                salas.map((sala) => (

                    <SalaCard
                        key={sala.id}
                        sala={sala}
                    />

                ))
            }

        </div>
    )
}

