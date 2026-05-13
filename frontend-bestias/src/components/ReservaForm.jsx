export function ReservaForm() {

    return (

        <div className="reserva-container">

            <h2>Reservar Sala</h2>

            <form className="reserva-form">

                <input
                    type="text"
                    placeholder="Nombre completo"
                />

                <input
                    type="email"
                    placeholder="Correo institucional"
                />

                <input
                    type="date"
                />

                <input
                    type="time"
                />

                <button className="primary-button">
                    Confirmar Reserva
                </button>

            </form>

        </div>
    )
}

