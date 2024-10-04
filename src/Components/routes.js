import {HashRouter, Route, Routes} from 'react-router-dom';
import { Projects } from './pages/Projects/projects.jsx';
import {Home} from './pages/Home/Home.jsx';
import { AboutMe } from './pages/aboutme/AboutMe.jsx';
export function Router() {

    return (
        <Routes >
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Proyectos' element={<Projects></Projects>}></Route>
            <Route path='/Aboutme' element={<AboutMe></AboutMe>}></Route>
            <Route path="/projects.json" exact={true} render={() => null} />
        </Routes>
    )

}