import "./css/Menu.css"
import { Link } from "react-router-dom"
export function Menu() {

    return (
        <menu className="menuContainer">
            <Link to="/">
            
                <button className="boton">Home</button>
            </Link>
            <Link to="/Proyectos">
                <button className="boton">Projects</button>
            </Link>
            <button className="boton">Nada</button>
            <button className="boton">Nada</button>
            <button className="boton">Nada</button>

        </menu>
    )

}