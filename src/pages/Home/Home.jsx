import Hero from "./Hero/Hero";
import Sales from "./Sales/Sales";
import { popularsales, toprateslaes, sneaker, highlight, story } from "../../data/data";
import FlexContent from "./FlexContent/FlexContent";
import Stories from "./Stories/Stories";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Sales endpoint={popularsales} ifExists></Sales>
            <FlexContent ifExists endpoint={highlight}></FlexContent>
            <Sales endpoint={toprateslaes}></Sales>
            <FlexContent endpoint={sneaker}></FlexContent>
            <Stories story={story}></Stories>
        </div>
    );
};

export default Home;