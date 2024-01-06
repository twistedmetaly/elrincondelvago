import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy} from "react";
import Root from "./layout/Root.jsx";
import BasicLayout from "./layout/BasicLayout.jsx";

const HomeContainer = lazy(() => import('./pages/home/containers/HomeContainer.jsx'))

function App() {
    return <BrowserRouter basename="/elrincondelvago">
        <Routes>
            <Route path="/" element={<Root/>}>
                <Route path="/" element={<BasicLayout/>}>
                    <Route path="/" element={<HomeContainer/>}/>
                </Route>
            </Route>

        </Routes>
    </BrowserRouter>
}

export default App
