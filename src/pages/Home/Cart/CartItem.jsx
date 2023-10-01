import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux';
import { setDecreaseQuantity, setIncreaseItemQuentity, setReomveItemFromCart } from '../../../redux/CartSlice';
const CartItem = ({ item }) => {
    const { id, title, text, img, color, shadow, price, quantity } = item;
    const dispatch = useDispatch();
    const handelRemove = (id, item) => {
        dispatch(setReomveItemFromCart({ id, item }))
    }

    const handelIncrease = (id) => {
        dispatch(setIncreaseItemQuentity(id))
    }

    const handelDecreaseQuantity = id => {
        dispatch(setDecreaseQuantity(id))
    }
    return (
        <>
            <div className='flex items-center justify-between w-full px5'>
                <div className='flex items-center gap-5'>
                    <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 ease-in-out grid items-center`}>
                        <img className='w-36 h-auto object-fill lg:w-28' src={img} alt="" />
                        <div className='absolute right-1 rounded top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 '>{price}</div>
                    </div>
                    <div className='grid items-center gap-4'>
                        <div className='grid items-center leading-none'>
                            <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>{title}</h1>
                            <p className='text-sm text-slate-900 lg:text-xs'>{text}</p>
                        </div>
                        <div className='flex items-center justify-around w-full'>
                            <button onClick={() => handelDecreaseQuantity(id)} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"><MinusIcon className='w-5 h-5 lg:w-4 lg:-h4 text-white storke-[2]'></MinusIcon></button>
                            <div className='bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-6 flex items-center justify-center'>{quantity}</div>
                            <button onClick={() => handelIncrease(id)} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"><PlusIcon className='w-5 h-5 lg:w-4 lg:-h4 text-white storke-[2]'></PlusIcon></button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grid items-center justify-center'>
                        <h1 className='text-lg lg:text-base text-slate-900 font-medium'>{price * quantity}</h1>
                    </div>
                    <div className='grid items-center justify-center'>
                        <button onClick={() => handelRemove(id, item)} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"><TrashIcon className='w-5 h-5 lg:w-4 lg:-h4 text-white storke-[2]'></TrashIcon></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;