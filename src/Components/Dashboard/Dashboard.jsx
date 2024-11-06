import {Link, useLocation} from "react-router-dom";
import Cart from "./Cart/Cart.jsx";
import Wishlist from "./Wishlist/Wishlist.jsx";
import {useEffect} from "react";


const Dashboard = () => {


    const currentUrl = useLocation().pathname;


    useEffect(() => {
        if(currentUrl.includes('dashboard')){
            document.title = 'Gadget Heaven | Dashboard';
        }
    }, [currentUrl]);


    return (
        <div className={'bg-[#f7f7f7] max-h-fit pb-60'}>

            <div className="bg-[#9538e2]">
                <div
                    className={'container mx-auto text-white flex flex-col justify-center items-center pt-10 pb-10 gap-y-5'}>
                    <h1 className={'text-4xl font-bold w-9/12 text-center leading-snug'}>Dashboard</h1>
                    <p className={'text-base font-normal w-6/12 text-center leading-loose'}>Explore the latest
                        gadgets that will take your experience to the next level. From smart devices to the
                        coolest accessories, we have it all!</p>
                    <div className={'flex  gap-x-5'}>
                        <Link to={'/dashboard/cart'}
                              className={`${currentUrl === '/dashboard/cart' ? 'bg-white text-[#9538e2] text-xl font-bold' : ' border bg-transparent text-white text-xl font-base'} px-10 py-3 rounded-full active:scale-95 transition transform duration-100`}>Cart</Link>
                        <Link to={'/dashboard/wishlist'}
                              className={`${currentUrl === '/dashboard/wishlist' ? 'bg-white text-[#9538e2] text-xl font-bold' : ' border bg-transparent text-white text-xl font-base'} px-10 py-3 rounded-full active:scale-95 transition transform duration-100`}>Wishlist</Link>
                    </div>
                </div>
            </div>

            {currentUrl === '/dashboard/cart' ? <Cart></Cart> : ''}
            {currentUrl === '/dashboard/wishlist' ? <Wishlist></Wishlist> : ''}

        </div>
    );
};

export default Dashboard;
