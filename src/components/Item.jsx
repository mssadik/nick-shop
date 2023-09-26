import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"
const Item = ({ item, ifExists }) => {
    const { id, color, shadow, title, text, img, btn, rating, price } = item;
    console.log(item);

    return (
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ${ifExists ? 'grid-cols-2  gap-10 ' : 'justify-items-center'}`}>
            <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center space-y-2 py-2  ${ifExists ? '' : ''}`}>
                <div className={`grid items-center  ${ifExists ? '' : 'justify-items-center'}`}>
                    <h1 className="text-slate-200 text-xl lg:text:-lg md:text-base font-medium filter drop-shadow-sm">{title}</h1>
                    <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">{text}</p>
                </div>
                <div className={`${ifExists ? '' : ''}`}>
                    <div className={`flex items-center justify-between ${ifExists ? '' : ''}`}>
                        <div className="flex items-center bg-white/80 px-1 rounded"><h1 className=" text-sm font-bold text-amber-500">${price}</h1></div>
                        <div className="flex items-center gap-1"><StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4"></StarIcon> <h1 className="md:text-sm font-normal text-slate-100">{rating}</h1> </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="bg-white blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"><ShoppingBagIcon className="icon-style text-slate-900"></ShoppingBagIcon></button>
                        <button className={`bg-white blur-effect-theme button-theme py-1 text-sm text-black font-medium shadow shadow-sky-200 ${ifExists ? '' : ''}`}>{btn}</button>
                    </div>
                </div>
            </div>
            <div className={`flex items-center ${ifExists ? 'absolute top-5 right-1 justify-items-end' : 'justify-center'}`}>
                <img className={`h-36  transition-theme hover:-rotate-12 ${ifExists ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]' : 'w-96'}`} src={img} alt="" />
            </div>
        </div>
    );
};

export default Item;