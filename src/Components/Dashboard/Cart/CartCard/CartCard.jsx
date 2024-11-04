import { RiDeleteBin6Line } from "react-icons/ri";


const CartCard = () => {
    return (
        <div className={'bg-white rounded-2xl min-h-48 mb-5 p-6 grid grid-cols-12 gap-x-10'}>
            <div className={'bg-gray-500/20 rounded-xl col-span-3 flex justify-center items-center'}>Left</div>
            <div className={'col-span-8 flex flex-col justify-around items-start'}>
                <h1 className={'text-2xl font-semibold'}>Samsung Galaxy S23 Ultra</h1>
                <p className={'text-base text-gray-500'}>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                <p className={'text-lg font-semibold'}>Price: 999.99 €</p>
            </div>
            <div className={'col-span-1 flex justify-center items-center'}>
                <button className={'active:scale-90 transition transform duration-100'}>
                    <RiDeleteBin6Line className={'text-2xl text-red-500'}/>
                </button>

            </div>
        </div>
    );
};

export default CartCard;
