import NavigationMenu from "./components/NavigationMenu/menu";
import Logo from "./components/NavigationMenu/logo"
import LandingContent from "./components/MainContent/quiz";
import LogAccount from "./components/NavigationMenu/accountsignup";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';

import './index.css';


const Homepage = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        setIsLoading(false);
    });
    
    
    return (
        <>
            <div className="nav-wrapper">
                <Logo />
                <NavigationMenu />
                <LogAccount />
            </div>
            
            <div className="spacer layer1 main-content">
                {isLoading?<h1>Loading...</h1>:<Outlet />}
            </div>

        </>
    )
};

export default Homepage;