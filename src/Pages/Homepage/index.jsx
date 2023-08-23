import NavigationMenu from "./components/NavigationMenu/menu";
import Logo from "./components/NavigationMenu/logo"
import SignUp from './components/NavigationMenu/signup';
import QuizBtn from './components/MainContent/quiz'
import './index.css';

const Homepage = () => {

    return (
        <>
            <div className="nav-wrapper">
                <Logo />
                <NavigationMenu />
                <SignUp />
            </div>
            <div className="spacer layer1 main-content">
                <span className="text-xxl">Lorem ipsum dolor sit amet contur adipisicing elit.</span>
                <p className="text-m">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, repellendus deleniti voluptate quibusdam voluptatem reprehenderit!</p>
                <QuizBtn />
            </div>

        </>
    )
};

export default Homepage;