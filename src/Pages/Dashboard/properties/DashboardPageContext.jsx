import { createContext, useContext } from "react";

const DashboardPageContext = createContext();

// eslint-disable-next-line react/prop-types
const DashboardPageProvider = ({ children }) => {
    const value = {};
    return (
        <DashboardPageContext.Provider value={value} >
            { children }
        </DashboardPageContext.Provider>
    )
}

//custom context hook
const useDashboardPageContext = () => {
    const context = useContext(DashboardPageContext);
    if(context === undefined) {
        throw new Error(
            'useDashboardPageContext must be used within a DashboardPageProvider'
        )
    }
    return context;
}

export {
    DashboardPageProvider , 
    // eslint-disable-next-line react-refresh/only-export-components
    useDashboardPageContext
}