import { BsFillMenuButtonWideFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const HomeLayout=({children})=>{

    return(
        <>
         <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-4 ml-4">
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
            <li className="absolute bottom-8">
            <div className="flex items-center ">
                <li><button className="bg-orange-500 font-bold text-zinc-800 cursor-pointer"> <Link to={"/login"} >Login</Link> </button></li>
                <li><button className="bg-orange-500 font-bold text-zinc-800 cursor-pointer"><Link to={"/signup"} >SignUp</Link></button></li>
            </div>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
        </>
    )
}

export default HomeLayout