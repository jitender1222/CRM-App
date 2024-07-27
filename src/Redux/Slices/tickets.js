import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance";


const initialState={
    ticketList:[],
    ticketDistribution:{
        open:0,
        resolved:0,
        inProgress:0,
        onHold:0,
        cancelled:0
    }
}
export const allTicket=createAsyncThunk("tickets/getMyAssignedTickets",async ()=>{
    try {
        const response = axiosInstance.get("getMyAssignedTickets",{
            headers:{
                "x-access-token":localStorage.getItem('token')
            }
        });
        toast.promise(response,{
            success:"Successfully loaded all the tickets",
            loading:"Fetching tickets belonging to you",
        });
        return await response;
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
            state.ticketList=action?.payload?.data?.result;
            const ticket=action?.payload?.data?.result;
            ticket.forEach(el => {
                state.ticketDistribution[el.status]+=1
            });
        });
    }
})

export default ticketsSlice.reducer
