
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

function Doggo() {

    const [dogSelected, setDogSelected] = useState(false)

    const [dogTouched, setDogTouched] = useState(false)

    const [wagged, setWagged] = useState(false)
    const [animation, setAnimation] = useState(0)

    // se requiere transition y speaked para la otra animacion por el hecho de que animation y wagged puede cambiar asincronamente en un useEffect 
    // y mandarle otro valor que no conviene
    const [transition, setTransition] = useState(0)
    const [speaked, setSpeaked] = useState(false)


    const [sprites1, setSprites1] = useState([imgSrc2, imgSrc1, imgSrc3])

    const [sprites2, setSprites2] = useState([imgSrc5, imgSrc4, imgSrc6])

    const [sprites3, setSprites3] = useState([imgSrc7, imgSrc8, imgSrc9, imgSrc10, imgSrc11])

    const [comentarios, setComentarios] = useState([])
    const [comentario, setComentario] = useState(0)
    const UseEffectejecutandose = useRef(false)
    const [estadoUseEffect, setEstadoUseEffect] = useState(false)

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


    if (comentarios.length > 0) {

        if (dogSelected && !dogTouched) {
            return (
                <DoggoSelected O={{ setDogTouched, setTransition, setSpeaked, setComentario, comentarios, setDogSelected, sprites2, animation }}></DoggoSelected>
            )
        } else if (dogTouched) {
            return (
                <DoggoTalking O={{ transition, sprites3, comentarios, comentario }}></DoggoTalking>
            )
        } else {
            return (
                <DoggoUnselected O={{ setDogSelected, sprites1, animation }}></DoggoUnselected>
            )
        }
    }
}

async function ObtenerComentarios(setter) {
    try {
        const response = await fetch("/comentarios.json", {
        headers: { 
          'Accept': 'application/json' 
        }}) 

        var json = await response.json();
        setter.setComentarios(json)
    } catch (error) {
      const response = await fetch("https://pepinillojr.github.io/Portafolio-Pepinillo/comentarios.json", {
           headers: { 
            'Accept': 'application/json' 
           }}) 
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
    render() {
        return (
            <Doggo></Doggo>
        )
    }

}