import {Link} from "react-router-dom";
import CartCard from "./CartCard/CartCard.jsx";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import {useContext} from "react";
import CartContextAPI from "../../../Routes/ContextAPI/CartContextAPI.jsx";


const Cart = () => {

    const [cart] = useContext(CartContextAPI);

    return (
        <div className={'container mx-auto px-10'}>
            <div className={'flex justify-between items-center h-24'}>
                <h1 className={'text-3xl font-bold'}>Cart</h1>
                <div className={'flex justify-end items-center gap-x-2'}>
                    <h1 className={'text-xl font-bold mr-5'}>Total Cost: 999.99 €</h1>
                    <Link to={`/dashboard/cart`}>
                        <button className={'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full cursor-pointer active:scale-95 transition transform duration-100'}>
                            <div className={'bg-white w-full h-full px-5 py-2 rounded-full text-[#9538e2] text-lg font-semibold'}>
                                <div className={'flex justify-center items-center gap-x-2'}>Sort by Price<HiOutlineAdjustmentsVertical className={'text-2xl'}/></div>
                            </div>
                        </button>
                    </Link>
                    <Link to={`/dashboard/cart`}>
                        <button className={'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full cursor-pointer active:scale-95 transition transform duration-100'}>
                            <div className={'bg-transparent w-full h-full px-5 py-2 rounded-full text-white text-lg font-normal'}>Purchase</div>
                        </button>
                    </Link>
                </div>
            </div>
            {
                cart.map((gadget, index) => {
                    return <CartCard key={index} gadget={gadget}></CartCard>
                })
            }
        </div>
    );
};

export default Cart;
