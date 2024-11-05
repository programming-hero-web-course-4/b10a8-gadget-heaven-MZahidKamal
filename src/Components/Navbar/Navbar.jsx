import './Navbar.css';
import {BsCart3} from "react-icons/bs";
import {IoMdHeartEmpty} from "react-icons/io";
import {Link, NavLink, useLocation} from "react-router-dom";


const nav_links = [
    {path: "/", name: "Home"},
    {path: "/statistics", name: "Statistics"},
    {path: "/dashboard", name: "Dashboard"},
]


const Navbar = () => {


    const currentUrl = useLocation().pathname;
    //console.log(currentUrl);


    return (
        <nav className={'bg-[#f7f7f7]'}>
            {/*<div className={'container mx-auto py-10 flex justify-between items-center'}>

                <div className="left-logo">
                    <NavLink to={'/'} className={'text-3xl font-bold'}>Gadget Heaven</NavLink>
                </div>

                <div className="middle-menu">
                    <ul className={'text-base font-normal flex gap-x-10'}>
                        {
                            nav_links.map((link, index) => {
                                return <NavLink to={`${link.path}`}
                                                key={index}
                                                className={'cursor-pointer hover:font-semibold hover:underline'}>{link.name}</NavLink>
                            })
                        }
                        <NavLink to={'/'} className={'cursor-pointer hover:font-semibold hover:underline'}>Home</NavLink>
                        <NavLink to={'/statistics'} className={'cursor-pointer hover:font-semibold hover:underline'}>Statistics</NavLink>
                        <NavLink to={'/dashboard'} className={'cursor-pointer hover:font-semibold hover:underline'}>Dashboard</NavLink>
                    </ul>
                </div>

                <div className="right-buttons flex gap-x-5">
                    <NavLink to={'/cart'} className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <BsCart3 size={25} color={'#000000'}/>
                    </NavLink>
                    <NavLink to={'/favourite'}
                             className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
                        <IoMdHeartEmpty size={25} color={'#000000'}/>
                    </NavLink>
                </div>

            </div>*/}
            <div className={`container mx-auto flex justify-between items-center ${currentUrl==='/'? 'py-14 absolute top-0 left-0 right-0 z-10':'py-6'}`}>

                <div className="left-logo">
                    <Link to={'/'} className={`text-3xl ${currentUrl==='/'? 'text-white':'text-black'} font-bold`}>Gadget Heaven</Link>
                </div>

                <div className="middle-menu">
                    <ul className={'text-base font-normal flex gap-x-14'}>
                        {
                            nav_links.map((link, index) => {
                                return <NavLink to={`${link.path}`}
                                                key={index}
                                                className={`${currentUrl==='/'? 'text-white':'text-black'} cursor-pointer hover:font-semibold hover:underline active:scale-95 transition transform duration-100`}>{link.name}</NavLink>
                            })
                        }
                    </ul>
                </div>

                <div className="right-buttons flex gap-x-5">
                    <NavLink to={'/dashboard/cart'} className="text-2xl w-12 h-12 bg-white rounded-full flex justify-center items-center active:scale-95 transition transform duration-100">
                        <BsCart3/>
                    </NavLink>
                    <NavLink to={'/dashboard/wishlist'}
                             className="text-3xl w-12 h-12 bg-white rounded-full flex justify-center items-center active:scale-95 transition transform duration-100">
                        <IoMdHeartEmpty/>
                    </NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;