import {HashRouter, Route, Routes} from 'react-router-dom';
import { Projects } from './pages/Projects/projects.jsx';
import {Home} from './pages/Home/Home.jsx';
export function Router() {

    return (
        <Routes >
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/Proyectos' element={<Projects></Projects>}></Route>
        </Routes>
    )

}