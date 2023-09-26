
const FlexContent = ({endpoint, ifExists}) => {
    const {title, heading, text, img, btn, url} = endpoint;

    return (
        <div className={`flex my-20 md:my-20 sm:my-12 items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse' : ''}`}>
            <div className="max-w-lg lg:max-w-none w-full md:text-center grid items-center md:justify-items-center">
                <h1 className="text-4xl sm:text-3xl font-bold text-gradient">{heading}</h1>
                <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg">{title}</h1>
                <p className="xl:text-sm my-4 text-slate-900">{text}</p>
                <a className="flex items-center" href={url}><button className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5">{btn}</button></a>
            </div>
            <div className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full">
                <img className={`w-auto object-fill translate-theme ${ifExists ? 'h-60 lg:h-56 md:h-52 sm:-h44 sxm:h-36 rotate-6 hover:-rotate-12' : 'h-72 lg:h-64 md:h-60 sm:h-48 rotate-[19deg] hover:rotate-12'}`} src={img} alt={`img/${heading}`} />
            </div>
        </div>
    );
};

export default FlexContent;