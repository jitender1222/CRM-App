import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosInstance"
import toast from "react-hot-toast";

const initialState={
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || undefined,
    token:localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") || false
}

export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
      const responsePromise = axiosInstance.post("auth/signin", data);
  
      toast.promise(responsePromise, {
        loading: "Submitting Form",
        success: "Successfully Login",
        error: "Something went wrong, please try again!"
      });
  
      const response = await responsePromise;
      return response;
    } catch (error) {
      console.log(error);
    }
  });

export const signup=createAsyncThunk("/auth/signup",async (data)=>{

    try {
        const response= await axiosInstance.post("auth/signup",data);
        toast.promise=(response,{
            loading:"Submitting Form",
            success:"Successfully signed up",
            error:"Something went wrong Please try again !"
        })
        return await response; 
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,(state,action)=>{
            state.isLoggedIn=(action.payload.data ?.token != undefined);
            state.data=action.payload.data ?.userData;
            state.role=action.payload.data ?.userData ?.userType;
            state.token=action.payload.data ?.token;

            localStorage.setItem("role",action.payload.data ?.userData ?.userType);
            localStorage.setItem("isLoggedIn",(action.payload.data ?.token != undefined));
            localStorage.setItem("data",JSON.stringify(action.payload.data ?.userData));
            localStorage.setItem("token",action.payload.data ?.token);
        })
    }
})


export default authSlice.reducer