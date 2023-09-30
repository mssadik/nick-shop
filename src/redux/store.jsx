import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { cartApi } from "./Api/Api";


const store = configureStore({
    reducer:{
        cartSlice: CartSlice,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartApi.middleware),
    
})
export default store