import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/auth";

const Login = () => {

  const dispatch=useDispatch();

  const [loginDetails,setLoginDetails]=useState({
    email:"",
    password:""
  });

  function onSubmit(){
    console.log("inside")
    if(!loginDetails.email || !loginDetails.password) return;
    const response=dispatch(login(loginDetails))
    console.log(response);
  }

  function onHandleChange(e){
    const {name,value}=e.target;
    console.log(name,value);
    setLoginDetails({
      ...loginDetails,
      [name]: value
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
            />

            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
            />
            <button onClick={onSubmit} className="btn  btn-warning">Login</button>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Login;
