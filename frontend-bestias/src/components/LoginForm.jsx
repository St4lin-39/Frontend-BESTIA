import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function LoginForm() {

    const[correo, setCorreo] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleLogin = (e) =>{
        if(!correo && !password){
            alert("Rellene todos los campos")
            return
        }
        e.preventDefault()
        console.log("Correo: " + correo)
        console.log("Password: " + password)
        alert("Login simulado correctamente")
        navigate("/reservas")
    }

    return (

        <div className="login-container">

            <h2>Iniciar Sesión</h2>

            <form 
                className="login-form"
                onSubmit ={handleLogin}
            >

                <input
                    type="email"
                    placeholder="Correo institucional"
                    value ={correo}
                    onChange = {(e)=>setCorreo(e.target.value)}

                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value = {password}
                    onChange = {(e)=> setPassword(e.target.value)}
                />

                <button className="primary-button">
                    Ingresar
                </button>

            </form>

        </div>
    )
}

