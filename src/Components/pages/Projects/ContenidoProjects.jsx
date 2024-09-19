
import "../../css/Projects.css"
import { Expandido } from "./proyectoExpandido";
import { useState, useEffect } from "react"

export function ContenidoProjects() {

    const [projects, setProjects] = useState([]);
    const [selected , setSelected] = useState([])

    

    useEffect(() => {
        ObtenerProyectos({projects, setProjects});
    }, [])

    useEffect(() => {
        setSelected(projects.map(() => false))
        console.log(selected)

    }, [projects])

    if (projects.length > 0) {

    return (
        <div className="Projecto">
            {projects.map((project,key) => {
                // for now this will do because all projects will only include 3 images
                const imgSrc1 = `${process.env.PUBLIC_URL}/imagenesProjectos/${project.images[0].img}`;
                const imgSrc2 = `${process.env.PUBLIC_URL}/imagenesProjectos/${project.images[0].img}`;
                const imgSrc3 = `${process.env.PUBLIC_URL}/imagenesProjectos/${project.images[0].img}`;  // this is important
                // the only way (the only way i found) i can add dinamically this images to every project, is by accesing the public folder
                // and using the files there
                // this is because all files inside src are managed by webpack and they need to be imported
                // meanwhile in the public folder all files are directly served and can be accessed by the url
                return (
                    <div onClick={() => { const listT = selected.map((x) => false); listT[key] = !listT[key]; setSelected(listT) }} 
                    key={key} className={(selected[key] ? "ProjectoContainerOpen" : "ProjectoContainer")} style={{marginLeft: "auto"}}>


                    <button className={selected[key] ? "BotonCerrarO" : "BotonCerrarC"}>Cerrar</button>

                    
                    <div className="ProjectoBox" > 
                        <div className="ProjectoTexto">
                            <div className="ProjectoTitulo">{project.title}</div>
                                {project.text}
                                <Expandido P={{selected, setSelected, projects, key}} ></Expandido>
                        </div>
                    <div  className={selected[key] ? "ProjectoFotosOpen" : "ProjectoFotos"}>
                        <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[0].gridRow, gridColumn: project.images[0].gridColumn}} src={imgSrc1} alt="" />
                        <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[1].gridRow, gridColumn: project.images[1].gridColumn}} src={imgSrc2} alt="" />
                        <img className="foto" style={{width: '100%', height: '100%',gridRow: project.images[2].gridRow, gridColumn: project.images[2].gridColumn}} src={imgSrc3} alt="" />
                    </div>
                    </div>
                </div>)})}
        </div>
    )}
    else {
        return <div></div>
    }
}


async function ObtenerProyectos(setter) {

    //when using Create React App, you cannot fetch local files 
    //from the src directory directly with fetch because they are not served by the web server. 
    //You would need to import them as modules instead, or move them to the public directory.

    // that last part doesn't seem to be the situation tho, and never forget to use the headers
    try {
    const response = await fetch("/projects.json", {
        headers: { 
          'Accept': 'application/json' 
        }}) 
    //console.log(await response.text())
    
        var json = await response.json();
        setter.setProjects(json.list)
    } catch (error) {
        const response = await fetch("https://pepinillojr.github.io/Portafolio-Pepinillo/projects.json", {
            headers: { 
              'Accept': 'application/json' 
            }}) 
        //console.log(await response.text())
        
        var json = await response.json();
        setter.setProjects(json.list)
        
    }
}