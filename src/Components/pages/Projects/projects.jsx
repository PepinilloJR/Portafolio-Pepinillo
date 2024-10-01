
import "../../css/Projects.css"
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { Menu } from "../../Menu.jsx"
import { ContenidoProjects } from "./ContenidoProjects.jsx"
import { Rover } from "../../Doggo.jsx"
import { useState } from "react"


export function Projects() {

    const [desplegado, setDesplegado] = useState(false)

    return (   
        <div className="Container">
            <Datos></Datos>
            <div className="Sector2">
                <Menu></Menu>
                <ContenidoProjects></ContenidoProjects>
            </div>
            <Rover></Rover>
        </div>
    )
}