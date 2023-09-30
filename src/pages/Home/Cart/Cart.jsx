import { useDispatch, useSelector } from "react-redux";
import { setCloseCart } from "../../../redux/CartSlice";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const isTrue = useSelector((state) => state.cartSlice.cart);
    const cartItems = useSelector((state) => state.cartSlice.cartItem)



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
                            <div>
                                {
                                    cartItems?.map((item, i) =><CartItem key={i} item={item}></CartItem>)
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;