import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/Slices/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    name: "",
    userType: "",
    userStatus: "",
    clientName: "",
  });


  function onHandleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  async function onSubmit() {
    if (
      !signupDetails.email ||
      !signupDetails.password ||
      !signupDetails.name ||
      !signupDetails.userType ||
      !signupDetails.userStatus ||
      !signupDetails.clientName
    )
      return;
    const response = await dispatch(signup(signupDetails));
    if(response.payload) navigate("/login");
    else resetSignupDetails();
  }

  function handleUserType(e){
    const userTypeSelected=e.target.textContent;
    setSignupDetails({
      ...signupDetails,
      userType:userTypeSelected,
      userStatus:(userTypeSelected === "customer") ? "approved" : "suspended"
    })
    document.getElementById("UserTypeDropDown").open = "false"
  }

  function resetSignupDetails() {
    setSignupDetails({
      email: "",
      password: "",
      name: "",
      userType: "",
      userStatus: "",
      clientName: "",
    });
  }
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="card bg-cyan-600 text-primary-content w-96 ">
          <div className="card-body text-white flex-col	justify-around	">
            <span className="card-title text-3xl justify-center">SignUp</span>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={signupDetails.name}
            />
            <input
              name="email"
              type="email"
              placeholder="name@gmail.com"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={signupDetails.email}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={signupDetails.password}
            />
             
              <div className=" dropdown" id="UserTypeDropDown">
                <div  tabIndex={0} role="button" className="btn m-1">
                 {(!signupDetails.userType) ? "User Type" : signupDetails.userType}
                </div>
                <ul
                onClick={handleUserType}
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>customer</a>
                  </li>
                  <li>
                    <a>engineer</a>
                  </li>
                  <li>
                    <a>admin</a>
                  </li>
                </ul>
              </div>
  
            <input
              name="clientName"
              type="text"
              placeholder="Client Name"
              className="input input-bordered input-warning w-full max-w-xs"
              onChange={onHandleChange}
              value={signupDetails.clientName}
            />
            <button onClick={onSubmit} className="btn  btn-warning">
              SignUp
            </button>
            <p>If already Registered ?  <Link to={"/login"} >Login</Link> </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
