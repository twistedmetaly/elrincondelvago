import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./core/router/router.jsx";

function App() {
    return <RouterProvider router={router}/>
}

export default App
