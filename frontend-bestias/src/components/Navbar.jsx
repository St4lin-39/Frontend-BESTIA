import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <nav className = "navbar">
            <div className = "navbar-logo">
                BESTIA
            </div>

        <ul className="navbar-links">
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to = "/reservas">Salas</Link>
            </li>
            <li>
                <Link to = "/login">Login</Link>
            </li>
            <li>
                <Link to= "/admin">
                    Admin
                </Link>
            </li>
      </ul>
        </nav>
    )
}
