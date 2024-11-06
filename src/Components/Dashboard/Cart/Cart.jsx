import {Link} from "react-router-dom";
import CartCard from "./CartCard/CartCard.jsx";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import {useContext, useEffect, useState} from "react";
import CartContextAPI from "../../../Routes/ContextAPI/CartContextAPI.jsx";
import {toast} from "react-toastify";


const Cart = () => {


    const [cart, setCart] = useContext(CartContextAPI);
    const [cartPrice, setCartPrice] = useState(0);
    const [disablePurchaseButton, setDisablePurchaseButton] = useState(false);


    useEffect(() => {
        const total_price = cart.reduce((acc, gadget) => acc + gadget.price, 0);
        setCartPrice(total_price);
    }, [cart]);


    const handleSortByPrice = () => {

        if(cart.length > 0){
            let previousCart = [...cart];
            let sortedCart = previousCart.sort((a, b) => b.price - a.price);

            if(JSON.stringify(sortedCart) !== JSON.stringify(cart)){
                setCart(sortedCart);
                toast.success('Sorted by price successfully!');
            }
            else{
                toast.warn('Cart is already sorted by price!');
            }
        }
        else {
            toast.error('Cart is empty!');
        }
    };


    const handlePurchase = () => {

        document.getElementById('purchase_confirmation_modal').showModal();
        setTimeout(() => {
            document.getElementById('modal_close').click();
            setCart([]);
        }, 2000);
    }
    //document.getElementById('purchase_confirmation_modal').showModal();


    useEffect(() => {
        if(cart.length > 0){
            setDisablePurchaseButton(false);
        }
        else {
            setDisablePurchaseButton(true);
        }
    }, [cart]);



    return (
        <div className={'container mx-auto px-10'}>
            <div className={'flex justify-between items-center h-24'}>
                <h1 className={'text-3xl font-bold'}>Cart</h1>
                <div className={'flex justify-end items-center gap-x-2'}>
                    <h1 className={'text-xl font-bold mr-5'}>Total Cost: {cartPrice} €</h1>
                    <button onClick={()=>handleSortByPrice()} className={'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full cursor-pointer active:scale-95 transition transform duration-100'}>
                        <div className={'bg-white w-full h-full px-5 py-2 rounded-full text-[#9538e2] text-lg font-semibold'}>
                            <div className={'flex justify-center items-center gap-x-2'}>Sort by Price<HiOutlineAdjustmentsVertical className={'text-2xl'}/></div>
                        </div>
                    </button>
                    <Link to={`/dashboard/cart`}>
                        <button
                            onClick={()=>handlePurchase()}
                            disabled={disablePurchaseButton}
                            className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full ${disablePurchaseButton? 'cursor-not-allowed' : 'cursor-pointer active:scale-95 transition transform duration-100'}`}>
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

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="purchase_confirmation_modal" className="modal">
                <div className="modal-box flex flex-col justify-center items-center p-10 space-y-5">
                    <img src="/assets/images/confirmation.png" alt="confirmation_icon"/>
                    <h3 className="font-bold text-4xl">Payment Successful!</h3>
                    <p className="italic">You paid total {cartPrice} €.</p>
                    <p className="text-lg">Thanks for purchasing from us.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button id={'modal_close'} className="btn hidden">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};


export default Cart;
