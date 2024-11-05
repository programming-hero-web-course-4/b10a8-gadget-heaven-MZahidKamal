import Gadget from "./Gadget/Gadget.jsx";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllCategories, getFilteredGadgets} from "../../../SharedUtilities/SharedUtilities.jsx";


const Gadgets = () => {


    const gadgets = useLoaderData();


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(getAllCategories(gadgets));
    }, [gadgets]);


    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');


    useEffect(() => {
        setFilteredGadgets(gadgets);
        setActiveCategory('');
    }, [gadgets]);


    const handleFilter = (category) => {
        if (category === '') {
            setFilteredGadgets(gadgets);
            setActiveCategory(category);
        } else {
            setFilteredGadgets(getFilteredGadgets(category, gadgets));
            setActiveCategory(category);
        }
    }


    return (
        <div className={'bg-[#f7f7f7]'}>
            <div className={'container mx-auto px-10 py-16'}>
                <h1 className={'text-4xl font-bold text-center mb-14'}>Explore Cutting-Edge Gadgets</h1>
                <div className={'grid grid-cols-12 gap-5'}>
                    <div className={'bg-white rounded-2xl col-span-2 flex flex-col items-center py-5 gap-y-4 max-h-fit'}>
                        <button onClick={()=>handleFilter('')} className={`rounded-full ${activeCategory === '' ? `bg-[#9538e2]` : `bg-[#f7f7f7]`} text-lg text-white font-bold w-52 py-3 active:scale-95 transition transform duration-100`}>All Products</button>
                        {
                            categories.map((category, index) => {
                                return <button key={index} onClick={()=>handleFilter(category)} className={`rounded-full ${activeCategory === category ? `bg-[#9538e2]` : `bg-[#f7f7f7]`} text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100`}>{category}</button>;
                            })
                        }
                    </div>
                    <div className={'col-span-10 grid grid-cols-3 gap-8'}>
                        {
                            filteredGadgets.map((gadget, index) => {
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
