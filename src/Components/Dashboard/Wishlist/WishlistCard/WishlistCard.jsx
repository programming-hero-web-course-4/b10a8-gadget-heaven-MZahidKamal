import PropType from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import {useContext} from "react";
import WishlistContextAPI from "../../../../Routes/ContextAPI/WishlistContextAPI.jsx";


const WishlistCard = ({gadget}) => {


    const {
        id,
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


    const [wishlist, setWishlist] = useContext(WishlistContextAPI);
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
                    className={'flex justify-center items-center gap-x-2 bg-purple-500 px-6 py-2 rounded-full active:scale-95 transition transform duration-100'}>
                    <h3 className={'text-lg text-white font-semibold'}>Add To Cart</h3>
                </button>
            </div>
            <div className={'col-span-1 flex justify-center items-center'}>
                <button
                    onClick={()=>handleRemoveFromWishlist()}
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
