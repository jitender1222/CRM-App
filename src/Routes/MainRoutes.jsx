import {Routes,Route} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SIgnUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import AuthRoute from "./AuthRoute";
import AllUsers from "../pages/users/AllUsers";

function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/login" element={<Login />}  />
            <Route path="/signup" element={<Signup />}  />
            <Route element={<AuthRoute  allowedRoles={["admin","engineer"]} />}>
                <Route path="/users" element={<AllUsers />} />
            </Route> 
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default MainRoutes;