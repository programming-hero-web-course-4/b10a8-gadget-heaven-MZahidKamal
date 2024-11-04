const Footer = () => {
    return (
        <footer className={'container mx-auto py-20'}>
            <div className={'flex flex-col justify-center items-center gap-y-5'}>
                <h1 className={'text-3xl font-bold'}>Gadget Heaven</h1>
                <p className={'text-base font-normal text-gray-500'}>Leading the way in cutting-edge technology and
                    innovation.</p>
            </div>
            <hr className={'border-b my-8'}/>
            <div className={'flex justify-around'}>
                <div>
                    <h3 className={'text-lg font-bold mb-4'}>Services</h3>
                    <ul className={'text-sm font-normal text-gray-500 flex flex-col gap-y-1'}>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Product Support</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Order Tracking</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Shipping & Delivery</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Returns</li>
                    </ul>
                </div>
                <div>
                    <h3 className={'text-lg font-bold mb-4'}>Company</h3>
                    <ul className={'text-sm font-normal text-gray-500 flex flex-col gap-y-1'}>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>About Us</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Career</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 className={'text-lg font-bold mb-4'}>Legal</h3>
                    <ul className={'text-sm font-normal text-gray-500 flex flex-col gap-y-1'}>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Terms of Services</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Privacy Policy</li>
                        <li className={'cursor-pointer hover:text-black hover:underline'}>Cookie Policy</li>
                    </ul>
                </div>
            </div>
            <hr className={'border-b my-8'}/>
            <p className={'text-xs font-normal text-gray-500 text-center'}>Copyright © {new Date().getFullYear()} - All
                right reserved by Gadget Heaven Ltd</p>
        </footer>
    );
};

export default Footer;
