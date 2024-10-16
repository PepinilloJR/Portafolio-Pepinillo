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
function SeleccionarPos(Estado, Pos, setPos) {


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export function Canvas () {
    const canvasRef = useRef();

    const [Sprites, setSprites] = useState()
    const [posSprite, setPosSprite] = useState([0, 0, 0])
    const [Dibujar, setDibujar] = useState(false)
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



    const Animar = () => {
        // bien, la idea es lograr que al seleccionar una nueva posicion, ahi llamar a
        // setDibujar, para que dibuje la imagen

        // luego, tengo que pensar de alguna manera en que cuando cambia el estado por
        // la interaccion con rover, y en general, los cambios sean instantaneos
        // ya que aparecia como un delay entre cambios de estado y la animacion

    }

    useEffect(() => {


    }, [])

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
        console.log("dibuje " + Dibuje)
        }
    }, [Dibujar, Sprites])

    useEffect(() => {
        const imagen = new Image()
        imagen.src = imgSrc;
        setSprites(imagen)
    }, [])

    return <canvas 
    
    onMouseEnter={() => {

    }} 
    onMouseLeave={() => {

    }}

    onClick={() => {

    }}

    className="canvas" ref={canvasRef}></canvas>
}