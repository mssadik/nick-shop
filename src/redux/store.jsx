import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import { cartApi } from "./Api/Api";
import UserSlice from "./UserSlice";


const store = configureStore({
    reducer:{
        cartSlice: CartSlice,
        userSlice: UserSlice,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartApi.middleware),
    
})
export default store