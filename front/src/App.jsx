import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AdminPanel from "./components/admin/AdminPanel";
import AddCourse from "./components/admin/courses/AddCourse.jsx";
import CoursesList from "./components/admin/courses/CoursesList";
import CourseOffer from "./pages/CourseOffer";
import Home from "./pages/Home"

function App(){
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home/>} ></Route>
                <Route exact path="/auth/register" element={<Register/>} ></Route>
                <Route exact path="/auth/login" element={<Login/>} ></Route>
                <Route exact path="/admin/dashboard" element={<AdminPanel/>} ></Route>
                <Route exact path="/admin/add_course" element={<AddCourse/>} ></Route>
                <Route exact path="/admin/all" element={<CoursesList/>} ></Route>
                <Route exact path="/courses/offer" element={<CourseOffer/>}></Route>
            </Routes>
        </div>
    )
}

export default App;