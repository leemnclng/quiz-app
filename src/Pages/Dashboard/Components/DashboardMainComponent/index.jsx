import { useDashboardPageContext } from "../../properties/DashboardPageContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardContentPageComponent = () => {
    const Navigate = useNavigate();
    const acquiredData = localStorage.getItem('user');
    const [isLoading, setIsLoading] = useState(true);
    const handleLogout = () => {
        localStorage.clear();
        Navigate('/');
    }

    useEffect(()=>{
        if(acquiredData === null) {
            Navigate('/auth/login');
        }
        return()=>{
            setIsLoading(false);
        }
    })

    if(isLoading) {
        return(
            <h1>Loading....</h1>
        )
    }

    return(
        <>
            <h1>Dashboard Content</h1>
            <button onClick={handleLogout}>Ayoko na Dito!</button>
        </>
    )
    
}

export default DashboardContentPageComponent;