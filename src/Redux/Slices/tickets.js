import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";


const initialState={
    ticketList:[]
}

export const allTicket=createAsyncThunk("tickets/getMyAssignedTickets",async ()=>{
    try {
        console.log("inside")
        const response = axiosInstance.get("getMyAssignedTickets",{
            headers:{
                "x-access-token":localStorage.getItem('token')
            }
        });
        toast.promise(response,{
            success:"Successfully loaded alll the tickets",
            loading:"Fetching tickets belonging to you",
        });
        console.log(response)
        return await response
        
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
});


const ticketsSlice=createSlice({

    name:"ticket",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(allTicket.fulfilled,(state,action)=>{
            if(!action?.payload?.data == undefined) return;
            state.ticketList=action?.payload?.data.result;
        });
    }
})

export default ticketsSlice.reducer
