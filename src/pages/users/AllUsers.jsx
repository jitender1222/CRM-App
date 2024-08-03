import { useEffect, useState } from "react"
import HomeLayout from "../../layout/HomeLayout"
import axiosInstance from "../../config/axiosInstance"
import DataTable, { createTheme } from "react-data-table-component";
import UserDetailModal from "./UserDetailModal";

const AllUsers=()=>{
    const [displayUser,setDisplayUser]=useState([]);
    const [showAllUserData,setShowAllUserData]=useState({
        id:" ",
        name:" ",
        email:" ",
        userStatus:" ",
        clientName:" ",
        userType:" "
        
    });
    async function loadUsers(){
        
        const response=await axiosInstance.get("/users",{
            headers:{ 
                "x-access-token":localStorage.getItem('token')
            }
        })
        setDisplayUser(response?.data?.result)
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
        {
          name: 'User Status',
          selector: row => row.userStatus,
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
                    setShowAllUserData({
                      name: row.name,
                      id:row._id,
                      email:row.email,
                      userStatus:row.userStatus,
                      clientName:row.clientName,
                      userType:row.userType
                    })
                    document.getElementById('my_modal_2').showModal()}}
                    className="cursor-pointer"
                    columns={columns}
                    data={displayUser}
                    theme="solarized"
                />
            }
            <UserDetailModal showAllUserData={showAllUserData} resetTable={loadUsers} />
        </HomeLayout>
        </>
    )
}

export default AllUsers