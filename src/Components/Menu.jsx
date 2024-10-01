import "./css/Menu.css"
import { Link } from "react-router-dom"
export function Menu() {

    return (
        <menu className="menuContainer">
            <Link className="botonLink" to="/">
            
                <button className="boton">Home</button>
            </Link>
            <Link className="botonLink" to="/Proyectos">
                <button className="boton">Projects</button>
            </Link>
            <Link className="botonLink" to="/Proyectos">
                <button className="boton">Projects</button>
            </Link>
            <Link className="botonLink" to="/Proyectos">
                <button className="boton">Projects</button>
            </Link>

        </menu>
    )

}