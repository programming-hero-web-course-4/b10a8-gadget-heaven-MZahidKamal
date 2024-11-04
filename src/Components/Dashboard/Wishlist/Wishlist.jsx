import WishlistCard from "./WishlistCard/WishlistCard.jsx";

const Wishlist = () => {
    return (
        <div className={'container mx-auto px-10'}>


            <div className={'flex justify-between items-center h-24'}>
                <h1 className={'text-3xl font-bold'}>Wishlist</h1>
            </div>

            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>
            <WishlistCard></WishlistCard>


        </div>
    );
};

export default Wishlist;
