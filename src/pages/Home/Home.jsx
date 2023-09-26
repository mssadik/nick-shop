import Hero from "./Hero/Hero";
import Sales from "./Sales/Sales";
import { popularsales, toprateslaes } from "../../data/data";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Sales endpoint={popularsales} ifExists></Sales>
            <Sales endpoint={toprateslaes}></Sales>
        </div>
    );
};

export default Home;