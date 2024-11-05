import PropType from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import {useContext, useState} from "react";
import WishlistContextAPI from "../../../../Routes/ContextAPI/WishlistContextAPI.jsx";
import CartContextAPI from "../../../../Routes/ContextAPI/CartContextAPI.jsx";
import {toast} from "react-toastify";
import {BsCart3} from "react-icons/bs";


const WishlistCard = ({gadget}) => {


    const {
        // id,
        title,
        imageUrl,
        // category,
        price,
        description,
        // specification,
        // availability,
        // rating,
        // brand,
        // warranty,
        // releaseDate
    } = gadget;


    const [cart, setCart] = useContext(CartContextAPI);
    const [wishlist, setWishlist] = useContext(WishlistContextAPI);

    const [disableAddToCartButton] = useState(false);


    const handleAddToCart = () => {
        if (cart.includes(gadget)) {
            toast.info(`${title} is already in your cart!`);
        }
        else if (wishlist.includes(gadget)) {
            let newWishlist = wishlist.filter((item) => item !== gadget);
            setWishlist(newWishlist);
            setCart([...cart, gadget]);
            toast.success(`${title} is moved to cart successfully!`);
        }
        else {
            setCart([...cart, gadget]);
            toast.success(`${title} added to cart successfully!`);
        }
    }


    const handleRemoveFromWishlist = () => {
        let newWishlist = wishlist.filter((item) => item !== gadget);
        setWishlist(newWishlist);
    }


    return (
        <div className={'bg-white rounded-2xl min-h-56 mb-5 p-6 grid grid-cols-12 gap-x-10'}>
            <div className={'bg-gray-500/20 rounded-xl max-h-44 col-span-3 flex justify-center items-center'}>
                <img src={imageUrl} alt="" className={'w-full h-full object-contain object-center'}/>
            </div>
            <div className={'col-span-8 flex flex-col justify-around items-start'}>
                <h1 className={'text-2xl font-semibold'}>{title}</h1>
                <p className={'text-base text-gray-500'}>{description}</p>
                <p className={'text-lg font-semibold'}>Price: {price} €</p>
                <button
                    onClick={() => handleAddToCart()}
                    disabled={disableAddToCartButton}
                    className={`flex justify-center items-center gap-x-2 bg-purple-500 px-6 py-2 rounded-full ${disableAddToCartButton ? 'cursor-not-allowed' : 'active:scale-95 transition transform duration-100'}`}>
                    <h3 className={'text-lg text-white font-semibold'}>Add To Cart</h3>
                    <BsCart3 className={'text-2xl text-white'}/>
                </button>
            </div>
            <div className={'col-span-1 flex justify-center items-center'}>
                <button
                    onClick={() => handleRemoveFromWishlist()}
                    className={'active:scale-90 transition transform duration-100'}>
                    <RiDeleteBin6Line className={'text-2xl text-red-500'}/>
                </button>

            </div>
        </div>
    );
};


WishlistCard.propTypes = {
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
}


export default WishlistCard;
