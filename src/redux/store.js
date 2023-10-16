import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    reducer:{
        // reducers should kay-value pair
        counter: counterSlice
    }
})