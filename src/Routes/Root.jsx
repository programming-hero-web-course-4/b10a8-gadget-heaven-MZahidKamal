import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import {Outlet, useLoaderData} from "react-router-dom";
import GadgetsContextAPI from "./ContextAPI/GadgetsContextAPI.jsx";
import {useState} from "react";
import CartContextAPI from "./ContextAPI/CartContextAPI.jsx";
import WishlistContextAPI from "./ContextAPI/WishlistContextAPI.jsx";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Root = () => {

    const gadgets = useLoaderData();
    // console.log(gadgets);

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    return (
        <>
            <GadgetsContextAPI.Provider value={gadgets}>
                <WishlistContextAPI.Provider value={[wishlist, setWishlist]}>
                    <CartContextAPI.Provider value={[cart, setCart]}>

                        <Navbar></Navbar>
                        <Outlet/>
                        <Footer></Footer>

                        <ToastContainer
                            position="bottom-center"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={true}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        ></ToastContainer>

                    </CartContextAPI.Provider>
                </WishlistContextAPI.Provider>
            </GadgetsContextAPI.Provider>
        </>
    );
};

export default Root;
