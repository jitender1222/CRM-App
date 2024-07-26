import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../config/axiosInstance"
import toast from "react-hot-toast";

const initialState={
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || undefined,
    token:localStorage.getItem("token") || "",
    isLoggedIn: localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("data")) : undefined
}

export const login = createAsyncThunk("/auth/login", async (data) => {
    console.log(data);
    try {
      const responsePromise = axiosInstance.post("auth/signin", data);
      console.log("inside",data);
      toast.promise(responsePromise, {
        loading: "Submitting Form",
        success: "Successfully Login",
        error: "Something went wrong, please try again!"
      });
  
      const response = await responsePromise;
      console.log("response",response);
      return response;
    } catch (error) {
      console.log(error);
    }
  });

export const signup=createAsyncThunk("/auth/signup",async (data)=>{
    try {
        const responsePromise= axiosInstance.post("auth/signup",data);
        console.log("inside",data)
        toast.promise=(responsePromise,{
            loading:"Submitting Form",
            success:"Successfully signed up",
            error:"Something went wrong Please try again !"
        })
        const response=await responsePromise;
        console.log("signup",response);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            localStorage.clear();
            state.data="";
            state.role="";
            state.token="";
            state.isLoggedIn="";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,(state,action)=>{
            console.log(action);
            state.isLoggedIn=(action.payload.data?.token != undefined);
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

export const {logout} = authSlice.actions;
export default authSlice.reducer
