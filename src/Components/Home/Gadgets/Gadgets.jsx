import Gadget from "./Gadget/Gadget.jsx";
import {useLoaderData} from "react-router-dom";

const Gadgets = () => {

    const gadgets = useLoaderData();
    //console.log(gadgets)

    return (
        <div className={'bg-[#f7f7f7]'}>
            <div className={'container mx-auto px-10 py-16'}>
                <h1 className={'text-4xl font-bold text-center mb-14'}>Explore Cutting-Edge Gadgets</h1>
                <div className={'grid grid-cols-12 gap-5'}>
                    <div className={'bg-white rounded-2xl col-span-2 flex flex-col items-center py-5 gap-y-4 max-h-fit'}>
                        <button className={'rounded-full bg-[#9538e2] text-lg text-white font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>All Products</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>Laptops</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>Phones</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>Accessories</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>Smart Watches</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>MacBook</button>
                        <button className={'rounded-full bg-[#f7f7f7] text-lg text-gray-500 font-bold w-52 py-3 active:scale-95 transition transform duration-100'}>iPhones</button>
                    </div>
                    <div className={'col-span-10 grid grid-cols-3 gap-8'}>
                        {
                            gadgets.map((gadget, index) => {
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
