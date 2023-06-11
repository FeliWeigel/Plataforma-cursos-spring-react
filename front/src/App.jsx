import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App(){
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>} ></Route>
                <Route exact path="/auth/register" element={<Register/>} ></Route>
                <Route exact path="/auth/login" element={<Login/>} ></Route>
            </Routes>
        </div>
    )
}

export default App;