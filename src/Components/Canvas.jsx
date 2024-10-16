import React, { useEffect, useRef, useState } from 'react';
// vamos a usar un Ref para poder acceder al elemento
// canvas y a su context, asi lo hacemos con react
import imgSrc from "../archivos/spritesheet.png";

// defino el elemento canvas y lo paso 



// TODO: esto requiere menos logica si el spritesheet esta ordenado
//       por lo tanto, ordenar el spritesheet y cambiar la logica a 
//       una mas simple
//       o alternativamente, usar un json o lista contenedora de cada localizacion para cada
//       frame de alguna de las animaciones


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function Canvas () {
    const canvasRef = useRef();

    const [Sprites, setSprites] = useState()
    const [posSprite, setPosSprite] = useState([0, 0, 0])
    const [Estado, setEstado] = useState(0)
    const [Cargado, setCargado] = useState(false)
    const [Dibuje, setDibuje] = useState(true)

/*
    useEffect(() => {
        if (Sprites) {

            let animationFrame;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            
            const render = () => {
                Dibujar(context)
                 // requestAnimationFrame solicita que haga algo el navegador antes de actualizar el frame
                // lo usamos para llamar recursivamente a la funcion
                 requestAnimationFrame(render)
            }
            if (posSprite) {
               
                render()
            }
        }
        
    }, [Cargado])
*/
    useEffect(() => {
        if (Sprites) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        let sw = 802.5;
        let sh = 602.5;
        let sx = sw * posSprite[0];
        let sy = sh * posSprite[1];
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.drawImage(Sprites, sx, sy, sw, sh, 0, 0, context.canvas.width,context.canvas.height)
        setDibuje(!Dibuje)
        console.log("dibuje " + Dibuje)
        }
    }, [Sprites])

    useEffect(() => {
        const imagen = new Image()
        imagen.src = imgSrc;
        setSprites(imagen)
    }, [])

    return <canvas 
    
    onMouseEnter={() => {
        if (Estado < 2) {
            setEstado(1)
            //setPosSprite([0,1,0])
        }
    }} 
    onMouseLeave={() => {
        if (Estado < 2) {
            setEstado(0)
            //setPosSprite([0,0,0])
        }
    }}

    onClick={() => {
        if (Estado < 2) {
        setEstado(2)
        setPosSprite([0,2,0])
        }
    }}

    className="canvas" ref={canvasRef}></canvas>
}