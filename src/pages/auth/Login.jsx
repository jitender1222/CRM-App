import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [loginDetails,setLoginDetails]=useState({
    email:"",
    password:""
  });

  async function onSubmit(){
    if(!loginDetails.email || 
      !loginDetails.password) 
      return;
    const response=await dispatch(login(loginDetails))
    if(response.payload) navigate("/");
    else resetLoginDetails()
  }

  function onHandleChange(e){
    const {name,value}=e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  }
  function resetLoginDetails() {
    setLoginDetails({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="card bg-cyan-600 text-primary-content w-96 h-[50%]">
          <div className="card-body text-white flex-col	justify-around	">
          <span className="card-title text-3xl justify-center">Login</span>

            <input
            name="email"
              type="email"
              placeholder="name@gmail.com"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={loginDetails.email}
            />

            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={loginDetails.password}
            />
            <button onClick={onSubmit} className="btn  btn-warning">Login</button>
            <p>If not Registered ?  <Link to={"/signup"} > Register</Link>  </p>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Login;
