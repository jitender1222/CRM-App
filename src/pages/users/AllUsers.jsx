import { useEffect, useState } from "react"
import HomeLayout from "../../layout/HomeLayout"
import axiosInstance from "../../config/axiosInstance"
import DataTable, { createTheme } from "react-data-table-component";


const AllUsers=()=>{
    const [displayUser,setDisplayUser]=useState([]);
    const [showAllUserData,setShowAllUserData]=useState({
        _id:"",
        name:"",
        email:"",
        userStatus:"",
        clientName:""
    });
    async function loadUsers(){
        
        const response=await axiosInstance.get("/users",{
            headers:{
                "x-access-token":localStorage.getItem('token')
            }
        })
        setDisplayUser(response?.data?.result)
        console.log(response?.data?.result);
    }
    useEffect(()=>{
        loadUsers();
    },[])

    const columns = [
        {
          name: 'User Id',
          selector: row => row._id,
          reorder: true,
        },
        {
          name: 'Name',
          selector: row => row.name,
          reorder: true,
        },
        {
          name: 'Client Name',
          selector: row => row.clientName,
          reorder: true,
        },
        {
          name: 'User Type',
          selector: row => row.userType,
          sortable: true,
          reorder: true,
        },
    
      ];
          //  Theme implemented
    
      createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
    return (
        <>
        <HomeLayout>
            {
                <DataTable
                onRowClicked={(row) => {
                    setShowAllUserData(row)
                    document.getElementById('my_modal_2').showModal()}}
                className="cursor-pointer"
                  columns={columns}
                  data={displayUser}
                  theme="solarized"
                />
            }
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello {showAllUserData.name}</h3>
            <p className="py-4">User ID: {showAllUserData._id}</p>
            <p className="py-4">Name: {showAllUserData.name}</p>
            <p className="py-4">Email: {showAllUserData.email}</p>
            <p className="py-4">User Type: {showAllUserData.userType}</p>
            <p className="py-4">User Satus: {showAllUserData.userStatus}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
        </HomeLayout>
        </>
    )
}

export default AllUsers