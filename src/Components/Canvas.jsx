import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
// vamos a usar un Ref para poder acceder al elemento
// canvas y a su context, asi lo hacemos con react
import imgSrc from "../archivos/spritesheet.png";

// defino el elemento canvas y lo paso 



// TODO: esto requiere menos logica si el spritesheet esta ordenado
//       por lo tanto, ordenar el spritesheet y cambiar la logica a 
//       una mas simple
//       o alternativamente, usar un json o lista contenedora de cada localizacion para cada
//       frame de alguna de las animaciones
function SeleccionarPos(Estado, Pos, setPos) {


}

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

    const imagen = new Image()
    imagen.src = imgSrc;


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
        } else if (pasoLibroRef.current === 4) {

            posSprite.current = [3, 2, 0]
            pasoLibroRef.current = 5
            await sleep(200)
            setCambio(!Cambio)
        } else if (pasoLibroRef.current === 5) {
            // AQUI ESTA LA ESPERA MIENTRAS LEE <---------
            await sleep(1500)
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
        CargarSprittes(imgSrc, setSprites)

    }, [])

    useEffect(() => {
        if (Sprites) {
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






    return <canvas
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
}