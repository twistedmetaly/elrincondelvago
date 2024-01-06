import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {lazy} from "react";
const HomeContainer = lazy(() => import('./pages/home/containers/HomeContainer.jsx'))

function App() {
    return <BrowserRouter basename="/elrincondelvago">
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
        </Routes>
    </BrowserRouter>
}

export default App
