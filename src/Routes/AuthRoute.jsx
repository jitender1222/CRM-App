import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";



const AuthRoute=({allowedRoles})=>{
    const {role}=useSelector((State) => State.auth)
    console.log(role)
    return (
        <>
        {
            allowedRoles.find((givenRole) =>  givenRole == role ) ? <Outlet /> : <div>404 Error</div>
        }
        </>
    )
}

export default AuthRoute;