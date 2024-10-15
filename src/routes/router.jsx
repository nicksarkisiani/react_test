import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/Main.page.jsx";
import HomePage from "../pages/Home.page.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        children: [
            {
                path: "/home",
                element: <HomePage />,
            },
            // {
            //     path: "/about",
            //     element: <AboutPage />,
            // }
        ]
    },
]);