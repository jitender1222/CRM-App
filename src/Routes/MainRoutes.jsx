import {Routes,Route} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SIgnUp";
import Home from "../pages/Home";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/signup" element={<Signup />}  />
        </Routes>
    )
}

export default MainRoutes;