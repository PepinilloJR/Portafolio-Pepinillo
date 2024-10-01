import "../../css/Home.css"
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { Menu } from "../../Menu.jsx"
import { Contenido } from "./ContenidoHome.jsx"

import { Rover } from "../../Doggo.jsx"

export function Home() {
    return (
        <div className="Container">
            <Datos></Datos>
            <div className="Sector2">
                <Menu></Menu>
                <Contenido></Contenido>
            </div>
            <Rover></Rover>
        </div>
    )
}