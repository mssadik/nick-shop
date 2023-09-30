import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setOpenCart: (state, action) => {
            state.cart = action.payload;
        },
        setCloseCart: (state, action) => {
            state.cart = action.payload;
        },
        setItemToCart: (state, action) => {
            // Check if the item already exists in the cart
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (!existingItem) {
                state.cartItems.push({ quantity: 1, ...action.payload.item });
                toast.success(`${action.payload.item.tiel} Has been added`)
            } else {
                existingItem.quantity += 1;
                toast.success(`${action.payload.item.title} quentity has been incress`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
    },
});

export const { setOpenCart, setCloseCart, setItemToCart } = CartSlice.actions;
export default CartSlice.reducer;
