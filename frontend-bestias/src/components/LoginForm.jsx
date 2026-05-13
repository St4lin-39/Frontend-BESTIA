import { useState } from "react"
export function LoginForm() {

    return (

        <div className="login-container">

            <h2>Iniciar Sesión</h2>

            <form className="login-form">

                <input
                    type="email"
                    placeholder="Correo institucional"
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                />

                <button className="primary-button">
                    Ingresar
                </button>

            </form>

        </div>
    )
}

