import Gadget from "./Gadget/Gadget.jsx";
// import {useLoaderData} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getAllCategories} from "../../../SharedUtilities/SharedUtilities.jsx";
import GadgetsContextAPI from "../../../Routes/ContextAPI/GadgetsContextAPI.jsx";
import {Link, useLoaderData, useLocation, useParams} from "react-router-dom";


const Gadgets = () => {


    let gadgets = useContext(GadgetsContextAPI);
    let filteredGadgets = useLoaderData();


    const [displayGadgets, setDisplayGadgets] = useState([]);


    const currentURL = useLocation().pathname;
    const searchParameter = useParams().category;


    useEffect(() => {
        if(currentURL === '/'){
            setDisplayGadgets(gadgets);
        }
        else {
            setDisplayGadgets(filteredGadgets);
        }

    }, [currentURL, gadgets, filteredGadgets]);


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(getAllCategories(gadgets));
    }, [gadgets]);


    return (
        <div className={'bg-[#f7f7f7]'}>
            <div className={'container mx-auto px-10 py-16'}>
                <h1 className={'text-4xl font-bold text-center mb-14'}>Explore Cutting-Edge Gadgets</h1>
                <div className={'grid grid-cols-12 gap-5'}>

                    <div className={'bg-white rounded-2xl col-span-2 flex flex-col items-center py-5 gap-y-4 max-h-fit'}>
                        <Link to={'/'} className={`rounded-full ${currentURL === '/' ? 'bg-[#9538e2] text-white' : 'bg-[#f7f7f7] text-gray-500'} text-lg text-center font-bold w-52 py-3 active:scale-95 transition transform duration-100`}>All Products</Link>
                        {
                            categories.map((category, index) => {
                                return <Link to={`/${category}`} key={index} className={`rounded-full ${searchParameter === category ? 'bg-[#9538e2] text-white' : 'bg-[#f7f7f7] text-gray-500'} text-lg text-center font-bold w-52 py-3 active:scale-95 transition transform duration-100`}>{category}</Link>;
                            })
                        }
                    </div>

                    <div className={'col-span-10 grid grid-cols-3 gap-8'}>
                        {
                            displayGadgets.map((gadget, index) => {
                                return <Gadget key={index} gadget={gadget}/>;
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gadgets;
