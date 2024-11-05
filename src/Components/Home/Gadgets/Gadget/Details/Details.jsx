import PropType from "prop-types";
import {BsCart3} from "react-icons/bs";
import {IoMdHeartEmpty} from "react-icons/io";
import {useLoaderData} from "react-router-dom";
import {useContext} from "react";
import CartContextAPI from "../../../../../Routes/ContextAPI/CartContextAPI.jsx";
import WishlistContextAPI from "../../../../../Routes/ContextAPI/WishlistContextAPI.jsx";


const Details = () => {


    const gadget = useLoaderData();
    const {
        // id,
        title,
        imageUrl,
        // category,
        price,
        description,
        specification,
        availability,
        rating,
        // brand,
        // warranty,
        // releaseDate
    } = gadget;


    const [cart, setCart] = useContext(CartContextAPI)
    const handleAddToCart = () => {
        setCart([...cart, gadget]);
    }


    const [wishlist, setWishlist] = useContext(WishlistContextAPI)
    const handleAddToWishlist = () => {
        setWishlist([...wishlist, gadget]);
    }


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
                    <div className={'col-span-4 bg-gray-500/10 min-h-[480px] rounded-xl flex justify-center items-center'}>
                        <img src={imageUrl} alt="" className={'w-full h-full object-contain object-center'}/>
                    </div>
                    <div className={'col-span-8 rounded-xl flex flex-col justify-between items-start'}>
                        <h1 className={'text-3xl font-semibold'}>{title}</h1>
                        <h3 className={'text-xl font-semibold'}>Price: {price} €</h3>
                        <button className={`border ${availability? 'border-green-500 bg-green-500/30':'border-red-500 bg-red-500/30'} rounded-full px-4 py-1`}>{availability? 'In Stock':'Out of Stock'}</button>
                        <p className={'text-base text-gray-500'}>{description}</p>
                        <h3 className={'text-xl font-semibold'}>Specification:</h3>
                        <ol className={'list-decimal ml-5 text-base text-gray-500'}>
                            {
                                specification.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })
                            }
                        </ol>
                        <h3 className={'text-xl font-semibold'}>Rating:</h3>
                        <p>⭐⭐⭐⭐⭐ <span className={'text-base text-gray-500 font-semibold bg-gray-500/10 ml-2 px-4 py-1 rounded-full'}>{rating}</span></p>
                        <div className={'flex justify-center items-center gap-x-4'}>
                            <button
                                onClick={()=>handleAddToCart()}
                                className={'flex justify-center items-center gap-x-2 bg-purple-500 px-6 py-2 rounded-full active:scale-95 transition transform duration-100'}>
                                <h3 className={'text-lg text-white font-semibold'}>Add To Cart</h3>
                                <BsCart3 className={'text-2xl text-white'}/>
                            </button>
                            <button
                                  onClick={()=>handleAddToWishlist()}
                                  className="text-3xl w-12 h-12 border-2 bg-white rounded-full flex justify-center items-center active:scale-95 transition transform duration-100">
                                <IoMdHeartEmpty/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


Details.propTypes = {
    gadget: PropType.shape({
        id: PropType.number,
        title: PropType.string,
        imageUrl: PropType.string,
        category: PropType.string,
        price: PropType.number,
        description: PropType.string,
        specification: PropType.array,
        availability: PropType.bool,
        rating: PropType.number,
    })
};


export default Details;
