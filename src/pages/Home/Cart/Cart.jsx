import { useDispatch, useSelector } from "react-redux";
import { setCloseCart } from "../../../redux/CartSlice";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const isTrue = useSelector((state) => state.cartSlice.cart);
    const cartItems = useSelector((state) => state.cartSlice.cartItems)
    // console.log(cartItems);



    const onCartToggle = () => {
        dispatch(setCloseCart(false))
    }
    return (
        <div className={`${isTrue ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-0'} fixed top-0 left-0 ring-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}>
            <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                <CartCount onCartToggle={onCartToggle}></CartCount>
                {
                    cartItems?.length === 0 ? <CartEmpty></CartEmpty> :
                        <div>
                            <div className="flex py-3 px-5 items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden">
                                {
                                    cartItems?.map((item, i) =><CartItem key={i} item={item}></CartItem>)
                                }
                            </div>

                            <div className="fixed bottom-0 bg-white w-full px-5 py-3 space-y-2 grid items-center">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base font-semibold uppercase">Sub Total</h1>
                                    <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">00</h1>
                                </div>
                                <div className="gird w-full items-center gap-2 space-y-3">
                                    <p className="text-sm font-medium to-current">Texes and shipping will calculate at shipping</p>
                                    <button className="button-theme w-full bg-theme-cart text-white">Check Out</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;