import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import imgSrc from "../archivos/spritesheet.png";
import soundBark from "../archivos/bark.mp3";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function CargarSprittes(src, setter) {

    const imagen = new Image()
    imagen.src = src
    imagen.onload = () => {
        setter(imagen)
    }

}


export function Canvas() {

    const [Sprites, setSprites] = useState()
    const posSprite = useRef([0, 0, 0])
    const pasoRef = useRef(0)
    const pasoLibroRef = useRef(0)
    const canvasRef = useRef()
    const [Cambio, setCambio] = useState(false)
    const [Hovered, setHovered] = useState(false)
    const [Selected, setSelected] = useState(false)

    const [Comentarios, setComentarios] = useState()
    const [Mensaje, setMensaje] = useState("")

    const imagen = new Image()
    imagen.src = imgSrc;
    let bark = new Audio(soundBark)

    // animaciones

    const moverCola = async () => {
        if (pasoRef.current === 0) {
            posSprite.current = [1, 0, 0]
            pasoRef.current = 1
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 1) {
            posSprite.current = [2, 0, 0]
            pasoRef.current = 2
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 2) {
            posSprite.current = [1, 0, 0]
            pasoRef.current = 3
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 3) {
            posSprite.current = [0, 0, 0]
            pasoRef.current = 0
            await sleep(150)
            setCambio(!Cambio)

        }
    }

    const moverColaHovered = async () => {
        if (pasoRef.current === 0) {
            posSprite.current = [1, 1, 0]
            pasoRef.current = 1
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 1) {
            posSprite.current = [2, 1, 0]
            pasoRef.current = 2
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 2) {
            posSprite.current = [1, 1, 0]
            pasoRef.current = 3
            await sleep(150)
            setCambio(!Cambio)

        } else if (pasoRef.current === 3) {
            posSprite.current = [0, 1, 0]
            pasoRef.current = 0
            await sleep(150)
            setCambio(!Cambio)
        }

    }

    const LeerLibro = async () => {
        //console.log(pasoRef.current)
        if (pasoLibroRef.current === 0) {
            posSprite.current = [0, 2, 0]
            pasoLibroRef.current = 1
            await sleep(200)
            setCambio(!Cambio)

        } else if (pasoLibroRef.current === 1) {
            posSprite.current = [1, 2, 0]
            pasoLibroRef.current = 2
            await sleep(200)
            setCambio(!Cambio)

        } else if (pasoLibroRef.current === 2) {
            posSprite.current = [2, 2, 0]
            pasoLibroRef.current = 3
            await sleep(200)
            setCambio(!Cambio)

        } else if (pasoLibroRef.current === 3) {
            posSprite.current = [3, 0, 0]
            pasoLibroRef.current = 4
            await sleep(200)
            setCambio(!Cambio)
            bark.play() // aca se reproduce el sonido de ladrido, poco conveniente para lectura pero da buen timing
        } else if (pasoLibroRef.current === 4) {

            posSprite.current = [3, 2, 0]
            pasoLibroRef.current = 5
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 5) {
            // AQUI ESTA LA ESPERA MIENTRAS LEE <---------
            await sleep(2500)
            posSprite.current = [3, 0, 0]
            pasoLibroRef.current = 6
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 6) {
            posSprite.current = [2, 2, 0]
            pasoLibroRef.current = 7
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 7) {
            posSprite.current = [1, 2, 0]
            pasoLibroRef.current = 8
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 8) {
            posSprite.current = [0, 2, 0]
            pasoLibroRef.current = 9
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 9) {
            pasoLibroRef.current = 0
            await sleep(50)
            setSelected(false)
            setCambio(!Cambio)
        }

    }

    useLayoutEffect(() => {
        if (!Hovered && !Selected) {
            moverCola()
        } else if (Hovered && !Selected) {
            moverColaHovered()
        } else if (Selected) {
            LeerLibro()
        }


    }, [Cambio])
    // layoutEffect deberia ejecutar codigo antes del dibujado del navegador
    // quizas sea util ejecutar aqui el cambio de las posiciones del spritte


    useEffect(() => {
        if (Comentarios) {
            setMensaje(Comentarios[Math.floor(Math.random() * (Comentarios.length - 0) + 0)])
            
        }   

    }, [Selected])

    useEffect(() => {
        CargarSprittes(imgSrc, setSprites)
        ObtenerComentarios(setComentarios)
    }, [])

    useEffect(() => {
        if (Sprites && Comentarios) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            let sw = 802.5;
            let sh = 602.5;
            let sx = sw * posSprite.current[0];
            let sy = sh * posSprite.current[1];
            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            context.drawImage(Sprites, sx, sy, sw, sh, 0, 0, context.canvas.width, context.canvas.height)
        }

    }, [Sprites, Cambio])



    return <>
        <div style={{ display: pasoLibroRef.current === 5 ? "flex" : "none" }} className="globoTexto">{Mensaje}</div>
        <canvas
            onMouseEnter={() => {
                if (!Selected) {
                    setHovered(true)
                }
            }}
            onMouseLeave={() => {
                if (!Selected) {
                    setHovered(false)
                }
            }}
            onClick={() => {
                setSelected(true)
            }}
            className="canvas" ref={canvasRef}>


        </canvas>
    </>
}




async function ObtenerComentarios(setComentarios) {
    try {
        const response = await fetch("/comentarios.json", {
            headers: {
                'Accept': 'application/json'
            }
        })

        var json = await response.json();
        setComentarios(json)
    } catch (error) {
        const response = await fetch("https://pepinillojr.github.io/Portafolio-Pepinillo/comentarios.json", {
            headers: {
                'Accept': 'application/json'
            }
        })
        var json = await response.json();
        setComentarios(json)

    }
}