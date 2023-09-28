import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { footerAPI } from "../data/data";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer footerAPI={footerAPI}></Footer>
        </div>
    );
};

export default Layout;