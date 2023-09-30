import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { footerAPI } from "../data/data";
import Header from "../components/Header";
import Cart from "../pages/Home/Cart/Cart";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Cart></Cart>
            <Header></Header>
            <Outlet></Outlet>
            <Footer footerAPI={footerAPI}></Footer>
        </div>
    );
};

export default Layout;