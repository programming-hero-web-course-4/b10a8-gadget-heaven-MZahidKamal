import WishlistCard from "./WishlistCard/WishlistCard.jsx";
import {useContext} from "react";
import WishlistContextAPI from "../../../Routes/ContextAPI/WishlistContextAPI.jsx";

const Wishlist = () => {

    const [wishlist] = useContext(WishlistContextAPI);

    return (
        <div className={'container mx-auto px-10'}>
            <div className={'flex justify-between items-center h-24'}>
                <h1 className={'text-3xl font-bold'}>Wishlist</h1>
            </div>
            {
                wishlist.map((gadget, index) => {
                    return <WishlistCard key={index} gadget={gadget}></WishlistCard>
                })
            }
            {/*<WishlistCard></WishlistCard>*/}
        </div>
    );
};

export default Wishlist;
