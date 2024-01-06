import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeContainer from "./pages/home/containers/HomeContainer.jsx";

function App() {
    return <BrowserRouter basename="/elrincondelvago">
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
        </Routes>
    </BrowserRouter>
}

export default App
