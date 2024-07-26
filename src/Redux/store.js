import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/auth.js"
import ticketsSliceReducer from "./Slices/tickets.js"

const store=configureStore({

    reducer:{
        auth:authSliceReducer,
        tickets:ticketsSliceReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
    devTools:true
})

export default store;