
import "../../css/Projects.css"
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { Menu } from "../../Menu.jsx"
import { ContenidoProjects } from "./ContenidoProjects.jsx"

import imgSrc from "../../../archivos/Latest.webp";

export function Projects() {

    return (   
        <div className="Container">
            <div className="Sector1">
                <Datos></Datos>
            </div>
            <div className="Sector2">
                <Menu></Menu>
                <ContenidoProjects></ContenidoProjects>
            </div>
            <div className="Sector3">
                <img className="windowsPerro" src={imgSrc} alt="" />
            </div>
        </div>
    )
}