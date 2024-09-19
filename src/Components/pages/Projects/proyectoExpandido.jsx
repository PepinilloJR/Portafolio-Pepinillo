import "../../css/Projects.css"

export function Expandido(E) {

    // E is the object entry

    // P is the prop that contains the data of projects that we use in this component

    // 
    return (
        <div className={(E.P.selected[E.P.key] ? "ProjectoDescOpen" : "ProjectoDesc")}>
            {E.P.projects[E.P.key].desc.map((parrafo) => {

                if (typeof parrafo == "string") {
                return <div className="ProjectoTexto">
                    {parrafo}
                </div>
                } else {

                    const imgSrc1 = `${process.env.PUBLIC_URL}/imagenesProjectos/${parrafo.img}`;
                    return (
                        <img className="ImagenDesc" src={imgSrc1} alt="" />
                    )
                }
            })}        
        </div>
    )
}