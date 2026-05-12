export function SalaCard({ sala }) {

    return (

        <div className="sala-card">

            <h3>{sala.nombre}</h3>

            <p>
                Edificio: {sala.edificio}
            </p>

            <p>
                Capacidad: {sala.capacidad} personas
            </p>

            <button className="primary-button">
                Reservar
            </button>

        </div>
    )
}

