
import "../../css/Projects.css"
import { useState, useEffect } from "react"

import "../../../archivos/projects.JSON"

export function ContenidoProjects() {

    const [projects, setProjects] = useState([]);


    async function ObtenerProyectos() {

        //@Community I've found a solution! Instead of passing the relative path, you need to pass the complete path(inside your project), like fetch("src/data/fakeData.json). Instead of using res.json(), use res.text(), and, in the last then, use JSON.parse(data)

        //when using Create React App, you cannot fetch local files 
        //from the src directory directly with fetch because they are not served by the web server. 
        //You would need to import them as modules instead, or move them to the public directory.
        const response = await fetch("../../../archivos/projects.json") 
        //console.log(await response.text())

        var txt = await response.text();
        //var json = await JSON.parse(txt)
        console.log(txt)
        //setProjects(json.list)
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