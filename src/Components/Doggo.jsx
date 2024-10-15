
import { Component, useEffect, useRef, useState } from "react";
import React from "react";
import { DoggoSelected, DoggoTalking, DoggoUnselected } from "./ComDoggo";
import imgSrc from "../archivos/Latest.webp";
import imgSrc1 from "../archivos/a1.png";
import imgSrc2 from "../archivos/a2.png";
import imgSrc3 from "../archivos/a3.png";
import imgSrc4 from "../archivos/a4.png";
import imgSrc5 from "../archivos/a5.png";
import imgSrc6 from "../archivos/a6.png";
import imgSrc7 from "../archivos/t1.png";
import imgSrc8 from "../archivos/t2.png";
import imgSrc9 from "../archivos/t3.png";
import imgSrc10 from "../archivos/t4.png";
import imgSrc11 from "../archivos/t5.png";
import soundBark from "../archivos/bark.mp3";

const preloadImagesSrc = [
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    imgSrc5,
    imgSrc6,
    imgSrc7,
    imgSrc8,
    imgSrc9,
    imgSrc10,
    imgSrc11
]
const Sprites = [

]


function Doggo() {

    const [spritesCargados, setSpritesCargados] = useState(false)
    let bark = new Audio(soundBark)

    const [dogSelected, setDogSelected] = useState(false)

    const [dogTouched, setDogTouched] = useState(false)

    const [wagged, setWagged] = useState(false)
    const [animation, setAnimation] = useState(0)

    const [woofed, setWoofed] = useState(false)

    // se requiere transition y speaked para la otra animacion por el hecho de que animation y wagged puede cambiar asincronamente en un useEffect 
    // y mandarle otro valor que no conviene
    const [transition, setTransition] = useState(0)
    const [speaked, setSpeaked] = useState(false)

    const [sprites1, setSprites1] = useState()

    const [sprites2, setSprites2] = useState()

    const [sprites3, setSprites3] = useState()

    const [comentarios, setComentarios] = useState([])
    const [comentario, setComentario] = useState(0)
    const UseEffectejecutandose = useRef(false)
    const [estadoUseEffect, setEstadoUseEffect] = useState(false)


    useEffect(() => {
        // precarga de las imagenes de rover para evitar parpadeo
        function ImagenPromesa (url) {
            // util super util conocimiento
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = function() {
                    resolve(img)
                }
                img.src = url;
            })
        }

        async function PreCarga () {
            preloadImagesSrc.forEach(picture => {

                Sprites.push(ImagenPromesa(picture))
            });

            // esto es util
            const resultados = await Promise.all(Sprites)
            setSpritesCargados(true);
            setSprites1([resultados[1], resultados[0], resultados[2]])
            setSprites2([resultados[4], resultados[3], resultados[5]])
            setSprites3([resultados[6], resultados[7], resultados[8], resultados[9], resultados[10]])
        } 
        PreCarga();
        
    }, [])






    // ESTA SOLUCION ES PORQUE SOY UN BURRO CON LAS PROMISES
    // por cierto, el useEffect NO puede devolver una promesa asi que la funcion asyncrona debemos definirla dentro del useEffect

    // esta parte puede mejorar, y lo hara en el futuro!!

    useEffect(() => {
        const animar = async () => {
            // uso esta referencia para que no se acumulen diferentes useEffect
            UseEffectejecutandose.current = true;
            var cambio = transition
            await sleep(200);
            if (!dogTouched) {
                if (animation === 0) {
                    setWagged(false);
                    setAnimation(1)
                } else if (animation === 1 && !wagged) {
                    setAnimation(2)
                } else if (animation === 2 && !wagged) {

                    setAnimation(1)
                    setWagged(true);
                } else if (wagged) {
                    setAnimation(0)
                }
            } else {

                // por ejemplo, aca podria pasar que si usara wagged, que si, al clickear inicializa en false, pero podria pasar que justo se estaba ejecutando un useEffect anterior
                // y cuyo resultado fuera justo coincidentemente que speaked es true, esto saltearia el primer if y pasaria directamente al segundo, cancelando la animacion
                if (transition < 4 && speaked === false) {
                    cambio = transition + 1
                } else if (transition === 0) {
                    setDogTouched(false);
                } else {
                    cambio = transition - 1
                }

                if (transition === 1 && !woofed) {
                    bark.play();
                    setWoofed(true)
                }

                if (transition === 4) {
                    setSpeaked(true);

                    await sleep(4500);
                }
                setTransition(cambio)
            }


            UseEffectejecutandose.current = false;
            setEstadoUseEffect(!estadoUseEffect)
        };

        if (UseEffectejecutandose.current === false) {
            animar()
        }
    }, [estadoUseEffect])


    useEffect(() => {
        ObtenerComentarios({ comentarios, setComentarios })
    }, [])



    if (comentarios.length > 0 && spritesCargados) {
        if (dogSelected && !dogTouched) {
            if (woofed) {
                setWoofed(false)
            }
        }

        return (<>
            <div className="Sector3">
                <DoggoSelected O={{ setDogTouched, setTransition, setSpeaked, setComentario, comentarios, dogSelected, dogTouched, setDogSelected, sprites2, animation }}></DoggoSelected>
                <DoggoTalking O={{ transition, sprites3, comentarios, comentario, dogTouched }}></DoggoTalking>
                <DoggoUnselected O={{ setDogSelected, sprites1, animation, dogSelected, dogTouched }}></DoggoUnselected>
            </div>
        </>)


    }
}

async function ObtenerComentarios(setter) {
    try {
        const response = await fetch("/comentarios.json", {
            headers: {
                'Accept': 'application/json'
            }
        })

        var json = await response.json();
        setter.setComentarios(json)
    } catch (error) {
        const response = await fetch("https://pepinillojr.github.io/Portafolio-Pepinillo/comentarios.json", {
            headers: {
                'Accept': 'application/json'
            }
        })
        var json = await response.json();
        setter.setComentarios(json)

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// esto es una clase component de react, y nos sirve ahora mismo para poder realizar ciertas mejoras de rendimiento
// particularmente, quiero precargar las imagenes


export class Rover extends React.Component {

    // esto cachea las fotos a usar del perro antes de renderizarlo, al crear componentes de imagenes usando esas direcciones


    // esto podria hacerse en un useEffect 
    componentDidMount() {

        let bark = new Audio(soundBark)
    }

    render() {
        return (
            <Doggo ></Doggo>
        )
    }

}