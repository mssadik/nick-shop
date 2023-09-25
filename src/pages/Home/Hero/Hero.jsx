import { heroapi } from "../../../data/data";
import Clips from "./Clips";
import SocialLinks from "./SocialLinks";

const Hero = () => {
    const {title, subtitle, btntext, img, sociallinks, videos} = heroapi;
    return (
        <div className="relative h-auto w-auto flex flex-col">
            <div className="bg-theme clip-path h-[85vh] lg:-h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-1"></div>
            <div className="relative opacity-100 z-2 grid items-center justify-items-center nike-container">
                <div className="grid items-center justify-items-center mt-28 md:mt-24 ">
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{title}</h1>
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200">{subtitle}</h1>
                    <button className="button-theme font-bold bg-slate-200 shadow-slate-950 rounded-xl my-5">{btntext} </button>
                    <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
                        {
                            videos?.map((val, i) => <Clips key={i} val={val}></Clips>)
                        }
                    </div>
                    <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-10 gap-3">
                        {
                            sociallinks?.map((val, i) => <SocialLinks key={i} val={val}></SocialLinks>)
                        }
                    </div>
                </div>
                <div>
                    <img className="w-auto h-[45vh] lg:h-[35] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[20deg] hover:rotate-0 object-fill" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;