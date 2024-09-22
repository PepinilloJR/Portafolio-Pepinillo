export function DoggoSelected(Entry) {
    const O = Entry.O
    return (
        <div className="Sector3">
            <img onClick={() => {O.setDogTouched(true); O.setTransition(0); O.setSpeaked(false); O.setComentario(Math.floor(Math.random() * (O.comentarios.length - 0) + 0))}} 
            onMouseLeave={() => {O.setDogSelected(false)}} 
            className="windowsPerro" src={O.sprites2[O.animation]} alt="" />

        </div>
    )
}


export function DoggoTalking(Entry) {

    const O = Entry.O
    if (O.transition < 4) {
        return (
            <div className="Sector3">
                <img className="windowsPerro" src={O.sprites3[O.transition]} alt="" />
            </div>
        )
    } else {
        return (
            <div className="Sector3">
                <div className="windowsPerro">
                    <div className="globoTexto">{O.comentarios[O.comentario]}</div>
                    <img className="windowsPerro" src={O.sprites3[O.transition]} alt="" />
                </div>

            </div>
        )
    }

}


export function DoggoUnselected(Entry) {

    const O = Entry.O

    return (
        <div className="Sector3">
            <img onMouseEnter={() => {O.setDogSelected(true);}} className="windowsPerro" src={O.sprites1[O.animation]} alt="" />
        </div>
    )
}