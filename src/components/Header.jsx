import { HeartIcon, MagnifyingGlassCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <header className={`absolute top-7 left-0 right-0 opacity-100 z-50`}>
            <nav className='flex items-center justify-between nike-container'>
                <div className='flex items-center'>
                    <img className='w-16 h-auto' src={logo} alt="" />
                </div>
                <ul className='flex items-center justify-center gap-2'>
                    <li className='grid items-center'>
                        <MagnifyingGlassCircleIcon className='icon-style'></MagnifyingGlassCircleIcon>
                    </li>
                    <li className='grid items-center'>
                        <HeartIcon className='icon-style'></HeartIcon>
                    </li>
                    <li className='grid items-center'>
                        <button className='border-none outline-none active:scale-110 translate-all duration-300 relative '><ShoppingBagIcon className='icon-style'></ShoppingBagIcon></button>
                        <div className={`absolute top-4 ring-0 bg-white text-slate-900 shadow shadow-slate-900 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}>0</div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;