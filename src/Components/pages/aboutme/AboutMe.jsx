
import "../../css/general.css"
import { Datos } from "../../Datos.jsx"
import { ContenidoAboutMe } from "./ContenidoAboutme.jsx"
import { Menu } from "../../Menu.jsx"


import "../../css/AboutMe.css"

import { Rover } from "../../DoggoCanvas.jsx"

export function AboutMe() {
    return (
        <div className="Container">
            <Datos></Datos>
            <div className="Sector2">
                <Menu></Menu>
                <ContenidoAboutMe></ContenidoAboutMe>
            </div>
            <Rover></Rover>
        </div>
    )
}