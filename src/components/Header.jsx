import { HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenCart } from '../redux/CartSlice';
import { Link } from 'react-router-dom';
import { logOutUser } from '../redux/UserSlice';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
const Header = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartSlice.cartTotalQuantity)
    const email = useSelector((state) => state.userSlice.email)
    // console.log('email from heder', email);

    const handelLogOut = async () => {
        try {
            await signOut(auth); 
            dispatch(logOutUser()); 
        } catch (error) {
            console.error("Sign-out failed:", error);
        }
    }
    




    const onCartToggle = () => {
        dispatch(setOpenCart(true))
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);

        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll);
        };
    }, [])
    return (
        <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-200 z-50' : 'fixed top-0 left-0 ring-0 h-[8vh] w-full flex items-center justify-center opacity-100 z-50 blur-effect-theme '}>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex items-center'>
                    <Link to="/"><img className={`w-16 h-auto ${navState && 'filter brightness-0'}`} src={logo} alt="" /></Link>
                </div>
                <ul className='flex items-center justify-center gap-2'>
                    {
                        email ? (<li onClick={handelLogOut} className={` font-semibold ${navState ? 'text-black' : 'grid items-center cursor-pointer text-white'}`}><Link to="">Log_out</Link></li>) :
                            (<div className='flex items-center gap-3'>
                                <li className={` font-semibold ${navState ? 'text-black' : 'grid items-center cursor-pointer text-white'}`}><Link to="/register">Retister</Link></li>
                                <li className={` font-semibold ${navState ? 'text-black' : 'grid items-center cursor-pointer text-white'}`}><Link to="/login">Login</Link></li>
                            </div>)
                    }



                    <li className='grid items-center'>
                        <MagnifyingGlassCircleIcon className={`icon-style ${navState && 'text-black'}`}></MagnifyingGlassCircleIcon>
                    </li>
                    <li className='grid items-center'>
                        <HeartIcon className={`icon-style ${navState && 'text-black'}`}></HeartIcon>
                    </li>
                    <li onClick={onCartToggle} className='grid items-center cursor-pointer'>
                        <button className='border-none outline-none active:scale-110 translate-all duration-300 relative '><ShoppingBagIcon className={`icon-style ${navState && 'text-black'}`}></ShoppingBagIcon></button>
                        <div className={` ${navState ? 'bg-slate-900 text-black shadow-slate-900 ' : 'bg-slate-100 text-slate-900'} absolute top-4 ring-0 bg-white text-slate-900 shadow shadow-slate-900 w-4 h-4 font-bold text-[0.65rem] leading-tight  rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>{cartItems}</div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;