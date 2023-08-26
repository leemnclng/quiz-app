import { useDashboardPageContext } from "../../properties/DashboardPageContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardContentPageComponent = () => {
    const Navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const handleLogout = () => {
        localStorage.clear();
        Navigate('/home');
        location.reload();
    }
    
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },2000)
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