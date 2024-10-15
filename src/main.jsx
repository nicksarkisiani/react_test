import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/Main.page.jsx";
import HomePage from "./pages/Home.page.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/home",
        element: <HomePage />
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
