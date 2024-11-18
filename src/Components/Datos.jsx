import "./css/general.css"
import { FaInstagram, FaGithub, FaSteam, FaTelegram, FaLastfm, FaHeart    } from "react-icons/fa";
import imgSrc from '../archivos/drgonzo.png';
import { useState } from "react";


export function Datos() {

    const [desplegado, setDesplegado] = useState(false)


    return (
    <>
        <div className="Sector1">
        <div className="ContainerDatos" >
            <div className="Portada">
                <img className="fotoPortada" src={imgSrc} alt="" />
            </div>

            <div className="Redes">
                <a className="Red" target="blank" href="https://www.instagram.com/francisco_pepi/">
                <FaInstagram></FaInstagram>
                    Instagram
                </a>
                <a className="Red" target="blank" href="https://github.com/PepinilloJR">
                <FaGithub></FaGithub>
                    GitHub
                </a>
                <a className="Red" target="blank" href="https://t.me/PepinilloJR">
                <FaTelegram ></FaTelegram >
                Telegram</a>
                
            </div>
        </div>
        </div>
        <div className={desplegado ? "Sector1DO" : "Sector1DC"}>
            <div className="Portada">
                <img className="fotoPortada" src={imgSrc} alt="" />
            </div>
            
            <div className="Redes">
                <a className="Red" target="blank" href="https://www.instagram.com/francisco_pepi/">
                <FaInstagram></FaInstagram>
                    Instagram
                </a>
                <a className="Red" target="blank" href="https://github.com/PepinilloJR">
                <FaGithub></FaGithub>
                    GitHub
                </a>
                <a className="Red" target="blank" href="https://steamcommunity.com/profiles/76561198796699028/">
                <FaSteam></FaSteam>
                Steam</a>
                <a className="Red" target="blank" href="https://t.me/PepinilloJR">
                <FaTelegram ></FaTelegram >
                Telegram</a>
                
            </div>

            <div onClick={() => {setDesplegado(!desplegado)}} className={ desplegado ? "BotonDesplegeBoton": "BotonDesplegeBotonO"}>
            <FaHeart ></FaHeart>
            </div>
        </div>
        </>
    )

}