import "../../css/Home.css"
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { Menu } from "../../Menu.jsx"
import { Contenido } from "./ContenidoHome.jsx"

import imgSrc from "../../../archivos/Latest.webp";

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
            <div className="Sector3">
                <img className="windowsPerro" src={imgSrc} alt="" />
            </div>
        </div>
    )
}