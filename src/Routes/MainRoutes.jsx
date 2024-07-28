import {Routes,Route} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SIgnUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/signup" element={<Signup />}  />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default MainRoutes;