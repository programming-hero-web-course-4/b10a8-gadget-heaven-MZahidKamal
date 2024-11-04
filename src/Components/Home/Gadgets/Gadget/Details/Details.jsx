import {BsCart3} from "react-icons/bs";
import {IoMdHeartEmpty} from "react-icons/io";
import {Link} from "react-router-dom";


const Details = () => {
    return (
        <div className={'bg-[#f7f7f7] pb-[500px]'}>

            <div className="bg-[#9538e2] relative">
                <div className={'container mx-auto text-white flex flex-col justify-center items-center pt-10 pb-60 gap-y-5'}>
                    <h1 className={'text-4xl font-bold w-9/12 text-center leading-snug'}>Product Details</h1>
                    <p className={'text-base font-normal w-6/12 text-center leading-loose'}>Explore the latest
                        gadgets that will take your experience to the next level. From smart devices to the
                        coolest accessories, we have it all!</p>
                </div>
            </div>

            <div className={'mx-auto bg-white rounded-3xl w-[1200px] h-[550px] p-4 overflow-hidden absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/3'}>
                <div className={'w-full h-full grid grid-cols-12 gap-10 p-5'}>
                    <div className={'col-span-4 bg-gray-500/10 rounded-xl flex justify-center items-center'}>LEFT</div>
                    <div className={'col-span-8 rounded-xl flex flex-col justify-between items-start'}>
                        <h1 className={'text-3xl font-semibold'}>Samsung Galaxy S23 Ultra</h1>
                        <h3 className={'text-xl font-semibold'}>Price: 999.99 €</h3>
                        <button className={'border border-green-500 rounded-full bg-green-500/30 px-4 py-1'}>In Stock</button>
                        <p className={'text-base text-gray-500'}>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                        <h3 className={'text-xl font-semibold'}>Specification:</h3>
                        <ol className={'list-decimal ml-5 text-base text-gray-500'}>
                            <li>Intel i7th Gen</li>
                            <li>16 GB RAM</li>
                            <li>512 GB SSD</li>
                            <li>Touchscreen</li>
                        </ol>
                        <h3 className={'text-xl font-semibold'}>Rating:</h3>
                        <p>⭐⭐⭐⭐⭐ <span className={'text-base text-gray-500 font-semibold bg-gray-500/10 ml-2 px-4 py-1 rounded-full'}>4.8</span></p>
                        <div className={'flex justify-center items-center gap-x-4'}>
                            <button
                                className={'flex justify-center items-center gap-x-2 bg-purple-500 px-6 py-2 rounded-full active:scale-95 transition transform duration-100'}>
                                <h3 className={'text-lg text-white font-semibold'}>Add To Cart</h3>
                                <BsCart3 className={'text-2xl text-white'}/>
                            </button>
                            <Link to={'/wishlist'}
                                  className="text-3xl w-12 h-12 border-2 bg-white rounded-full flex justify-center items-center active:scale-95 transition transform duration-100">
                                <IoMdHeartEmpty/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
