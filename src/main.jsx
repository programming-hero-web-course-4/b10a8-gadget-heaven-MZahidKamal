import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import Root from './Routes/Root.jsx'
import Error404 from "./Components/Error404/Error404.jsx";
import Home from "./Components/Home/Home.jsx";
import Statistics from "./Components/Statistics/Statistics.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Cart from "./Components/Dashboard/Cart/Cart.jsx";
import Wishlist from "./Components/Dashboard/Wishlist/Wishlist.jsx";
import Details from "./Components/Home/Gadgets/Gadget/Details/Details.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        loader: async () => {
            const response = await fetch('https://raw.githubusercontent.com/MZahidKamal/Electronics-Gadgets/refs/heads/main/electronics-gadgets.json');
            return await response.json();
        },
        errorElement: <Error404></Error404>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('/assets/fake_data.json'),
                /*loader: async () => {
                    const response = await fetch('https://raw.githubusercontent.com/MZahidKamal/Electronics-Gadgets/refs/heads/main/electronics-gadgets.json');
                    return await response.json();
                }*/
            },
            {
                path: "/:category/:brand/:title/:id/product_details",
                loader: async ({params}) => {
                    // console.log(params);
                    const response = await fetch(`https://raw.githubusercontent.com/MZahidKamal/Electronics-Gadgets/refs/heads/main/electronics-gadgets.json`);
                    const data = await response.json();
                    return data.find((item) => item.id === Number(params.id));
                },
                element: <Details></Details>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/dashboard/cart",
                        element: <Cart></Cart>,
                    },
                    {
                        path: "/dashboard/wishlist",
                        element: <Wishlist></Wishlist>,
                    }
                ]
            }
        ],
    },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
