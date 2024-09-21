
import { useState } from "react";
import imgSrc from "../archivos/Latest.webp";
import imgSrc1 from "../archivos/a1.png";
import imgSrc2 from "../archivos/a2.png";
import imgSrc3 from "../archivos/a3.png";
import imgSrc4 from "../archivos/a4.png";
import imgSrc5 from "../archivos/a5.png";
import imgSrc6 from "../archivos/a6.png";

export function Doggo() {

    const [dogSelected, setDogSelected] = useState(false)

    const [dogTouched, setDogTouched] = useState(false)

    const [wagged, setWagged] = useState(false)
    
    const [speaked, setSpeaked] = useState(false)

    const [animation, setAnimation] = useState(0)

    const [sprites1, setSprites1] = useState([imgSrc2, imgSrc1, imgSrc3])

    const [sprites2, setSprites2] = useState([imgSrc5, imgSrc4, imgSrc6])

    setTimeout(()=> {
        if (animation === 0) {
            setWagged(false)
            setAnimation(1);
        } else if (animation === 1 && !wagged) {
            setAnimation(2)
        } else if (animation === 2 && !wagged) {
            setAnimation(1)
            setWagged(true)
        } else if (wagged) {
            setAnimation(0)
        }
    }, 170)

    if (dogSelected) {
        return (
        <div className="Sector3">
            <img onMouseLeave={() => {setDogSelected(false);}} className="windowsPerro" src={sprites2[animation]} alt="" />
        </div>
        )
    } else if (dogTouched) {


    } else {
    return (
        <div className="Sector3">
            <img onMouseEnter={() => {setDogSelected(true);}} className="windowsPerro" src={sprites1[animation]} alt="" />
        </div>
    )
    }
}
