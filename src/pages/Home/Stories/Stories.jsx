
import Title from "../../../components/Title";
// import '@splidejs/react-splide/css'

const Stories = ({story}) => {
    const {title, news} = story;
    return (
        <div className="nike-container mb-11">
            <Title title={title}></Title>
            <div>
            </div>
        </div>
    );
};

export default Stories;