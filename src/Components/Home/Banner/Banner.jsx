import {Link} from "react-router-dom";

const Banner = () => {
    return (
        <div className={'bg-[#f7f7f7] pb-96'}>
            <div className={'max-w-[2000px] mx-auto p-7'}>

                <div className={'border rounded-3xl p-1 relative'}>
                    <div className="bg-[#9538e2] rounded-2xl">
                        <div className={'container mx-auto text-white flex flex-col justify-center items-center pt-32 pb-60 gap-y-8'}>
                            <h1 className={'text-6xl font-bold w-9/12 text-center leading-snug'}>Upgrade Your Tech
                                Accessorize with Gadget Heaven Accessories</h1>
                            <p className={'text-base font-normal w-6/12 text-center leading-loose'}>Explore the latest
                                gadgets that will take your experience to the next level. From smart devices to the
                                coolest accessories, we have it all!</p>
                            <Link to={'/dashboard/cart'} className={'bg-white text-[#9538e2] text-xl font-bold px-7 py-3 rounded-full active:scale-95 transition transform duration-100'}>Shop
                                Now
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={'border-2 border-white mx-auto bg-white/30 rounded-3xl w-[1200px] h-[600px] p-4 overflow-hidden absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/3'}>
                    <img src="/assets/images/banner.jpg" alt="banner_image" className={'w-full h-full object-cover object-center rounded-2xl'}/>
                </div>

            </div>
        </div>
    );
};

export default Banner;
