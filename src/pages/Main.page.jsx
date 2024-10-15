import {Outlet} from "react-router";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer />
        </div>
    );
};

export default MainPage;