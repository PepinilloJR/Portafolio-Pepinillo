



export function DoggoSelected(Entry) {
    const O = Entry.O
    return (
        <img onClick={() => { O.setDogTouched(true); O.setTransition(0); O.setSpeaked(false); O.setComentario(Math.floor(Math.random() * (O.comentarios.length - 0) + 0)) }}
            onMouseLeave={() => { O.setDogSelected(false) }}
            className={(O.dogSelected && !O.dogTouched) ? "windowsPerro" : "windowsPerroC"} src={O.sprites2[O.animation].src} alt="" />
    )
}


export function DoggoTalking(Entry) {

    const O = Entry.O


    return (
        <div className={O.dogTouched ? "windowsPerro" : "windowsPerroC"}>
            <div style={{ display: O.transition < 4 ? "none" : "flex" }} className="globoTexto">{O.comentarios[O.comentario]}</div>
            <img className={(O.transition === 4) ? "windowsPerro" : "windowsPerroC"} src={O.sprites3[O.transition].src} alt="" />
            <img className={(O.dogTouched && O.transition < 4) ? "windowsPerro" : "windowsPerroC"} src={O.sprites3[O.transition].src} alt="" />
        </div>
    )
}




export function DoggoUnselected(Entry) {

    const O = Entry.O

    return (
        <img loading="lazy" onMouseEnter={() => { O.setDogSelected(true); }} className={(!O.dogSelected && !O.dogTouched) ? "windowsPerro" : "windowsPerroC"} src={O.sprites1[O.animation].src} alt="" />
    )
}