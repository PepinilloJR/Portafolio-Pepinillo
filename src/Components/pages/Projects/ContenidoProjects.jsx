
import "../../css/Projects.css"
import { useState, useEffect } from "react"


export function ContenidoProjects() {

    const [projects, setProjects] = useState([]);


    async function ObtenerProyectos() {
        //when using Create React App, you cannot fetch local files 
        //from the src directory directly with fetch because they are not served by the web server. 
        //You would need to import them as modules instead, or move them to the public directory.
        const response = await fetch('../../../../projects.JSON') 
        var json = await response.json();
        setProjects(json.list)
    }

    useEffect(() => {
        ObtenerProyectos();
    }, [])

    if (projects.length > 0) {
    return (
        <div className="ProjectoBox">
            {projects.map((project,key) => {
                return (
                <div key={key} className="ProjectoContainer" style={{marginLeft: "auto"}}>
                    <div className="ProjectoTexto">
                        <div className="ProjectoTitulo">{project.title}</div>
                        {project.text}
                    </div>
                <div className="ProjectoFotos">
                    <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[0].gridRow, gridColumn: project.images[0].gridColumn}} src={project.images[0].img} alt="" />
                    <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[1].gridRow, gridColumn: project.images[1].gridColumn}} src={project.images[1].img} alt="" />
                    <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[2].gridRow, gridColumn: project.images[2].gridColumn}} src={project.images[2].img} alt="" />
                </div>
                </div>
                )})}
        </div>
    )}
    else {
        return <div></div>
    }
}