
const SocialLinks = ({val}) => {
    const {icon} = val;
    return (
        <div>
            <img className="w-8 h-8 flex items-center cursor-pointer md:-w6 md:h-6 sm:w-5 sm:h-5 translate-x-full duration-200 hover:scale-110" src={icon} alt="" />
        </div>
    );
};

export default SocialLinks;