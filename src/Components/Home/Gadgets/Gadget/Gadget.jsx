import PropTypes from "prop-types";
import {Link} from "react-router-dom";


const Gadget = ({gadget}) => {


    const {
        // id,
        title,
        imageUrl,
        category,
        price,
        // description,
        // specification,
        // availability,
        // rating,
        brand,
        // warranty,
        // releaseDate
    } = gadget;


    return (
        <div className={'bg-white rounded-2xl p-5 flex flex-col gap-y-4'}>
            <div className={'bg-[#f7f7f7] rounded-xl flex justify-center items-center'}>
                <img src={imageUrl} alt="gadget_image" className={'h-52'}/>
            </div>
            <h2 className={'text-xl font-semibold'}>{title}</h2>
            <p className={'text-lg font-semibold text-gray-500'}>Price: {price} €</p>
            <div className={'my-1'}>
                <Link to={`/${category}/${brand}/${title}/product_details`} className={`w-full`}>
                    <button className={'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-0.5 rounded-full cursor-pointer active:scale-95 transition transform duration-100'}>
                        <div className={'bg-white w-full h-full px-5 py-2 rounded-full text-[#9538e2] text-lg font-bold'}>View Details</div>
                    </button>
                </Link>
            </div>

        </div>
    );
};

Gadget.propTypes = {
    gadget: PropTypes.object,
}

export default Gadget;
