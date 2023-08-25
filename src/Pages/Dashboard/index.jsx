// eslint-disable-next-line no-unused-vars
import { DashboardPageProvider } from "./properties/DashboardPageContext";
import DashboardContentPageComponent from "./Components/DashboardMainComponent";
const DashboardPageComponent = ()=>{
    // const users = useDashboardPageContext();
    // general layout can be performed here, just make a component and make it the parent child of each Dashboard Components
    return (
        <DashboardPageProvider>
            <DashboardContentPageComponent />
        </DashboardPageProvider>
        
    )
}

export default DashboardPageComponent;