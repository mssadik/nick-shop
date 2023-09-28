const Footer = ({ footerAPI }) => {
    const { titles, links } = footerAPI;
    return (
        <footer className="bg-theme pt-7 pb-5">
            <div className="nike-container text-slate-200">
                <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
                    {titles.map((val, i) => (
                        <div className="grid items-center" key={i}>
                            <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{val.title}</h1>
                        </div>
                    ))}
                    {
                        links.map((list, i) => (
                            <ul className="grid items-center gap-1" key={i}>
                                {
                                    list.map((link, i) =>(
                                        <li className="text-sm sm:text-xs" key={i}>
                                            {link.link}
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
