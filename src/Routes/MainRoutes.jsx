import {Routes,Route} from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/SIgnUp"

function MainRoutes(){
    return (
        <Routes>
            <Route path="/login" element={<Login />}  />
            <Route path="/signup" element={<Signup />}  />
            <Route path="/" element={<Signup />}  />
        </Routes>
    )
}

export default MainRoutes;