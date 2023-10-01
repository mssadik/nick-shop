import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
    
};

const calculateCartTotals = (cartItems) => {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    return { totalQuantity, totalPrice };
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
                toast.success(`${action.payload.item.title} Has been added`)
                // console.log(action.payload.item)
            } else {
                existingItem.quantity += 1;
                toast.success(`${action.payload.item.title} quentity has been incress`)
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setReomveItemFromCart: (state, action) => {
            console.log()
            const remain = state.cartItems.filter((item) => item.id !== action.payload.id)
            const newCollection = state.cartItems = remain
            localStorage.setItem('cart', JSON.stringify(newCollection));
            toast.success(`${action.payload.item.title} Has been removed`)
            // console.log(action.payload);
        },
        setIncreaseItemQuentity: (state, action) => {
            const target = state.cartItems.find((item) => item.id === action.payload);
            target.quantity += 1;
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
        },
        setDecreaseQuantity: (state, action) => {

            const target = state.cartItems.find((item) => item.id === action.payload);
            if (target.quantity > 1) {
                target.quantity -= 1;
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
            }
        },
        setAllItemRemove: (state) => {
            localStorage.removeItem('cart');
            state.cartItems = [];
        },
        setGetTotals: (state) => {
            const { totalQuantity, totalPrice } = calculateCartTotals(state.cartItems);
            state.cartTotalQuantity = totalQuantity;
            state.cartTotalPrice = totalPrice;
        },
        
    },
});

export const { setOpenCart, setCloseCart, setItemToCart, setReomveItemFromCart, setIncreaseItemQuentity, setDecreaseQuantity, setAllItemRemove, setGetTotals } = CartSlice.actions;
export default CartSlice.reducer;
