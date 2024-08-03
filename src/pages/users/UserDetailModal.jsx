import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosInstance";
import toast from "react-hot-toast";

const UserDetailModal=({showAllUserData,resetTable})=>{

    const [userStatus,setUserStatus]=useState(showAllUserData);
    async function onHandleClick(e){
        let dropdown=document.getElementById('open');
        dropdown.open=!dropdown.open;
        toast("Updating User ....");
        const response=await axiosInstance.patch("user/updateUser",{
            userId: userStatus.id,
            updates:{
                ...userStatus,
                userStatus: e.target.textContent,
            }
        },{
            headers:{
                "x-access-token":localStorage.getItem('token')
            }
        })
       if(response.data.result){
        toast.success("Updating User Successfully...");
        const user=response.data.result;
        setUserStatus({
            name:user.name,
            email:user.email,
            userStatus:user.userStatus,
            userType:user.userType,
            clientName:user.clientName
        })
       }
       resetTable();
    }

    useEffect(() => {
        setUserStatus(showAllUserData);
      }, [showAllUserData]);
    return (
        <>
         <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello {showAllUserData.name}</h3>
            <p className="py-4">User ID: {showAllUserData.id}</p>
            <p className="py-4">Name: {showAllUserData.name}</p>
            <p className="py-4">Email: {showAllUserData.email}</p>
            <div  className="py-4">User Satus: <details className="dropdown" id="open">
            <summary className="btn m-1">{userStatus.userStatus}</summary>
            <ul onClick={onHandleClick}  className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>rejected</a></li>
                <li><a>approved</a></li>
                <li><a>suspended</a></li>
            </ul>
            </details></div>
            <p className="py-4">User Type: {showAllUserData.userType}</p>
            <p className="py-4">Client Name: {showAllUserData.clientName}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
        </>
    )
}

export default UserDetailModal;