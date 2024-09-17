import "./css/Datos.css"
import { FaInstagram, FaGithub, FaSteam, FaTelegram   } from "react-icons/fa";
import imgSrc from '../archivos/w_FMppFo_400x400.jpg';


export function Datos() {

    return (
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
                <a className="Red" target="blank" href="https://steamcommunity.com/profiles/76561198796699028/">
                <FaSteam></FaSteam>
                Steam</a>
                <a className="Red" target="blank" href="https://t.me/PepinilloJR">
                <FaTelegram ></FaTelegram >
                Telegram</a>
                
            </div>
        </div>

    )

}