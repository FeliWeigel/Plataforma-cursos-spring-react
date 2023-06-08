import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App(){
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>}  ></Route>
            </Routes>
        </div>
    )
}

export default App;