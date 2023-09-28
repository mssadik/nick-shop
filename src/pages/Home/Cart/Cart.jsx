import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className={`fixed top-0 left-0 ring-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}>
            <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
                <CartCount></CartCount>
                <CartEmpty></CartEmpty>
                <CartItem></CartItem>
            </div>
        </div>
    );
};

export default Cart;