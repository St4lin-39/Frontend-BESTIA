export function SalaCard({ sala, setSalaSeleccionada }) {

    return (

        <div className="sala-card">

            <h3>{sala.nombre}</h3>

            <p>
                Edificio: {sala.edificio}
            </p>

            <p>
                Capacidad: {sala.capacidad} personas
            </p>

            <button 
                className="primary-button"
                onClick ={() => setSalaSeleccionada(sala)}
                >
                Reservar
            </button>

        </div>
    )
}

