 export function ReservaConfirmacion() {

    const claveTemporal = "1234"

    return (

        <div className="confirmacion-container">

            <h2>Reserva Confirmada</h2>

            <p>
                Tu reserva fue registrada exitosamente.
            </p>

            <div className="clave-box">

                <h3>Clave Temporal</h3>

                <span>{claveTemporal}</span>

            </div>

        </div>
    )
}

