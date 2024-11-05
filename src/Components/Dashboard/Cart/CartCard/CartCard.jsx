import PropType from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import {useContext} from "react";
import CartContextAPI from "../../../../Routes/ContextAPI/CartContextAPI.jsx";


const CartCard = ({gadget}) => {


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


    const [cart, setCart] = useContext(CartContextAPI);
    const handleRemoveFromCart = () => {
        let newCart = cart.filter((item) => item !== gadget);
        setCart(newCart);
    }


    return (
        <div className={'bg-white rounded-2xl min-h-48 mb-5 p-6 grid grid-cols-12 gap-x-10'}>
            <div className={'bg-gray-500/20 rounded-xl max-h-40 col-span-3 flex justify-center items-center'}>
                <img src={imageUrl} alt="" className={'w-full h-full object-contain object-center '}/>
            </div>
            <div className={'col-span-8 flex flex-col justify-around items-start'}>
                <h1 className={'text-2xl font-semibold'}>{title}</h1>
                <p className={'text-base text-gray-500'}>{description}</p>
                <p className={'text-lg font-semibold'}>Price: {price} €</p>
            </div>
            <div className={'col-span-1 flex justify-center items-center'}>
                <button
                    onClick={()=>handleRemoveFromCart()}
                    className={'active:scale-90 transition transform duration-100'}>
                    <RiDeleteBin6Line className={'text-2xl text-red-500'}/>
                </button>

            </div>
        </div>
    );
};


CartCard.propTypes = {
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


export default CartCard;
