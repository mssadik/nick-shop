import {StarIcon, ShoppingBagIcon} from "@heroicons/react/24/solid"
const Item = ({item}) => {
    const {id, color, shadow, title, text, img, btn, rating, price} = item;
    console.log(item);
 
    return (
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 `}>
            <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center space-y-2 p-5`}>
                <h1 className="text-slate-200 text-xl lg:text:-lg md:text-base font-medium filter drop-shadow-sm">{title}</h1>
                <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center bg-white/80 px-1 rounded"><h1 className="text-black text-sm">{price}</h1></div>
                    <div className="flex items-center gap-1"><StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4"></StarIcon> <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1> </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-white blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"><ShoppingBagIcon className="icon-style text-slate-900"></ShoppingBagIcon></button>
                    <button className="bg-white blur-effect-theme button-theme px-2 py-1 text-sm text-black font-medium shadow shadow-sky-200">{btn}</button>
                </div>
            </div>
            <div>
                <img className="h-36 w64 transition-theme hover:-rotate-6" src={img} alt="" />
            </div>
        </div>
    );
};

export default Item;