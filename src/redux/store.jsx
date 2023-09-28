import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";


const store = configureStore({
    reducer:{
        cartSlice: CartSlice,
    }
})
export default store