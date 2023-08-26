import NavigationMenu from "./components/NavigationMenu/menu";
import Logo from "./components/NavigationMenu/logo"
import LandingContent from "./components/MainContent/quiz";
import LogAccount from "./components/NavigationMenu/accountsignup";
import './index.css';


const Homepage = () => {

    return (
        <>
            <div className="nav-wrapper">
                <Logo />
                <NavigationMenu />
                <LogAccount />
            </div>
            <div className="spacer layer1 main-content">
                <LandingContent />
            </div>

        </>
    )
};

export default Homepage;