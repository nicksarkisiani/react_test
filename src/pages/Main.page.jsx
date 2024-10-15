import {Outlet} from "react-router";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainPage;