import WishlistCard from "../Dashboard/Wishlist/WishlistCard/WishlistCard.jsx";


const Statistics = () => {
    return (
        <div className={'bg-[#f7f7f7] pb-[500px]'}>
            <div className="bg-[#9538e2]">
                <div className={'container mx-auto text-white flex flex-col justify-center items-center pt-10 pb-10 gap-y-5'}>
                    <h1 className={'text-4xl font-bold w-9/12 text-center leading-snug'}>Statistics</h1>
                    <p className={'text-base font-normal w-6/12 text-center leading-loose'}>Explore the latest
                        gadgets that will take your experience to the next level. From smart devices to the
                        coolest accessories, we have it all!</p>
                </div>
            </div>
            <div className={'container mx-auto px-10'}>
                <div className={'flex justify-between items-center h-24'}>
                    <h1 className={'text-3xl font-bold'}>Statistics</h1>
                </div>
                <WishlistCard></WishlistCard>
            </div>
        </div>
    );
};

export default Statistics;
