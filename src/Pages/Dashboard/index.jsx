// eslint-disable-next-line no-unused-vars
import { DashboardPageProvider } from "./properties/DashboardPageContext";
import DashboardContentPageComponent from "./Components/DashboardMainComponent";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashboardPageComponent = ()=>{
    const Navigate = useNavigate();
    const acquiredData = localStorage.getItem('user');
    console.log(acquiredData);
    
    useEffect(()=>{
        if(acquiredData === null) {
            return Navigate('/auth/login');
        }
    })
    // const users = useDashboardPageContext();
    // general layout can be performed here, just make a component and make it the parent child of each Dashboard Components
    return (
        <DashboardPageProvider>
            <DashboardContentPageComponent />
        </DashboardPageProvider>
        
    )
}

export default DashboardPageComponent;