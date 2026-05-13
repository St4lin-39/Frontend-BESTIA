import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Reservas } from "./pages/Reservas"
import { Confirmacion } from "./pages/Confirmacion"

export function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/reservas"
                element={<Reservas />}
            />

            <Route
                path="/confirmacion"
                element={<Confirmacion />}
            />

        </Routes>
    )
}
