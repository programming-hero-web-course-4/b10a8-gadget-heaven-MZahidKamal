import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import {Outlet, useLoaderData} from "react-router-dom";
import ContextAPI from "./ContextAPI/ContextAPI.jsx";


const Root = () => {

    const gadgets = useLoaderData();
    // console.log(gadgets);

    return (
        <>
            <ContextAPI.Provider value={gadgets}>
                <Navbar></Navbar>
                <Outlet/>
                <Footer></Footer>
            </ContextAPI.Provider>
        </>
    );
};

export default Root;
