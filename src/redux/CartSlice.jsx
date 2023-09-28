import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : false,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOpenCart: (state, action) =>{
            state.cart = action.payload;
            
        },
        setCloseCart: (state, action) =>{
            state.cart = action.payload;

        }
    }

})

export const {setOpenCart, setCloseCart} = CartSlice.actions;
export default CartSlice.reducer;