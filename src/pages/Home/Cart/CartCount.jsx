import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setAllItemRemove, setGetTotals,  } from "../../../redux/CartSlice";
import { useEffect } from "react";

const CartCount = ({onCartToggle}) => {

    const dispatch = useDispatch();
    const handelRemoveItem = () =>{
        dispatch(setAllItemRemove())
    }
    
    // console.log(totalItem);
    const totalItem = useSelector((state) => state.cartSlice.cartTotalQuantity);
    const cartSlice = useSelector((state) => state.cartSlice);
   

    useEffect(() =>{
        dispatch(setGetTotals());

    },[dispatch, cartSlice])
    
    return (
        <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 w-full">
            <div className="flex justify-between gap-3">
                <div className="grid items-center cursor-pointer">
                    <ChevronDoubleLeftIcon onClick={onCartToggle} className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]"></ChevronDoubleLeftIcon>
                </div>
                <div className="grid items-center">
                    <h1 className="text-base font-medium text-slate-900">Your Cart <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-50 font-semibold">{totalItem} Items</span></h1>
                </div>
                <div className="flex items-center">
                    <button onClick={handelRemoveItem} className="rounded bg-theme-cart active:scale-9- p-0.5"><XMarkIcon className="w-5 h-5 text-white stroke-[2]"></XMarkIcon></button>
                </div>
            </div>
        </div>
    );
};

export default CartCount;