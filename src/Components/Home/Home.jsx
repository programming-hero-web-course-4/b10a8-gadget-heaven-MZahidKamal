import Banner from "./Banner/Banner.jsx";
import Gadgets from "./Gadgets/Gadgets.jsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const Home = () => {


    const currentUrl = useLocation().pathname;
    useEffect(() => {
        if(currentUrl === '/'){
            document.title = 'Gadget Heaven | Home';
        }
    }, [currentUrl]);


    return (
        <div>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};


export default Home;
