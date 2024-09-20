import "../../css/Home.css"
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { Menu } from "../../Menu.jsx"
import { Contenido } from "./ContenidoHome.jsx"

import { Doggo } from "../../Doggo.jsx"

export function Home() {
    return (
        <div className="Container">
            <div className="Sector1">
                <Datos></Datos>
            </div>
            <div className="Sector2">
                <Menu></Menu>
                <Contenido></Contenido>
            </div>
            <Doggo></Doggo>
        </div>
    )
}