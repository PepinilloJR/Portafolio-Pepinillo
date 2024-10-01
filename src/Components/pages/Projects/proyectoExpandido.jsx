import "../../css/Projects.css"

export function Expandido(E) {

    // E is the object entry

    // P is the prop that contains the data of projects that we use in this component

    // 
    return (
        <div key={E.P.key} className={(E.P.selected[E.P.key] ? "ProjectoDescOpen" : "ProjectoDesc")}>
            {E.P.projects[E.P.key].desc.map((parrafo, key) => {

                if (typeof parrafo == "string") {
                return <div key={key} className="ProjectoParrafo">
                    {parrafo}
                </div>
                } else {

                    const imgSrc1 = `${process.env.PUBLIC_URL}/imagenesProjectos/${parrafo.img}`;
                    return (
                        <img key={key} className="ImagenDesc" src={imgSrc1} alt="" />
                    )
                }
            })
            
            }        
            <div className="UrlContainer">
                {E.P.projects[E.P.key].url.map((url, key) => {
                    return <a className="Url" href={url.link} key={key}>
                        {url.desc}
                    </a>
                })}
            </div>
        </div>
    )
}