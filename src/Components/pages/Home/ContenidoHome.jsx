import "../../css/Home.css"
import { Link } from "react-router-dom"
export function Contenido() {

    return (
        <div className="contenidoBox" >
            <div className="TituloHome">What is this anyways?</div>
                    <div className="ParrafoHome">
                        Welcome to my portfolio!
                        here you will find all my finished and ongoing projects! and some more...  
            </div>

            <div className="contenidoSitios">
                <Link style={{animation: `spawn ${0.5}s ease-in forwards`}} className="sitio" to="/Proyectos">
                        <div className="TituloSitio">Projects...</div>
                        <div className="Desc">
                            Look at my latest projects and experiments!!!

                        </div>
                </Link>
                <Link style={{animation: `spawn ${1}s ease-in forwards`}} className="sitio" to="/Aboutme">
                        <div className="TituloSitio">About me...</div>
                        <div className="Desc">
                            Learn something about me!!!

                        </div>
                </Link>
            </div>

        </div>

    )

}