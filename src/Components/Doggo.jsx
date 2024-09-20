
import { useState } from "react";
import imgSrc from "../archivos/Latest.webp";
import imgSrc2 from "../archivos/Think.webp";
import imgSrc3 from "../archivos/Think2.png";
export function Doggo() {

    const [dogSelected, setDogSelected] = useState(false)

    const [wagging, setWagging] = useState(false)

    setTimeout(()=> {
        setWagging(!wagging)
    }, 100)

    if (dogSelected === true) {
        return (
        <div  className="Sector3">
            <img onMouseLeave={() => {setDogSelected(false); console.log("xd")}} className="windowsPerro" src={wagging ? imgSrc2 : imgSrc3} alt="" />
        </div>
        )
    } else {
    return (
        <div className="Sector3">
            <img onMouseEnter={() => {setDogSelected(true); console.log("xd")}} className="windowsPerro" src={imgSrc} alt="" />
        </div>
    )
    }
}
