import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Slices/auth";
import { useEffect } from "react";

const HomeLayout = ({ children }) => {
  const authSlice = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogout =()=>{
    dispatch(logout())
    navigate("/login");
  }

  useEffect(()=>{
    if(!authSlice.isLoggedIn) navigate("/login");
  },[])

  return (
    <>
    <div className="flex mt-4">
      <div className="drawer w-[25%]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-4">
          {/* Page content here */}
          <label htmlFor="my-drawer">
            <BsFillMenuButtonWideFill size={"32px"} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>View All Tickets</a>
            </li>
            <div className="absolute bottom-8 flex items-center space-x-2">
              {!authSlice.isLoggedIn ? (
                <>
                  <li>
                    <button className="bg-orange-500 font-bold text-zinc-800 cursor-pointer">
                      <Link to="/login">Login</Link>
                    </button>
                  </li>
                  <li>
                    <button className="bg-orange-500 font-bold text-zinc-800 cursor-pointer">
                      <Link to="/signup">SignUp</Link>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button onClick={handleLogout} className="bg-orange-500 font-bold text-zinc-800 cursor-pointer">
                      <Link to="/login">Logout</Link>
                    </button>
                  </li>
                  <li>
                    <button className="bg-orange-500 font-bold text-zinc-800 cursor-pointer">
                      <Link to="/">Profile</Link>
                    </button>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div className="flex gap-2 w-[50%]">{children}</div>
      </div>
    </>
  );
};

export default HomeLayout;
