import AccountBtn from "./account";
import SignUp from './signup';

const LogAccount = () => {
    const loggedUser = localStorage;
    console.log(loggedUser);

    if (loggedUser.length !== 0) {
        return (<AccountBtn />);
    } else {
        return (<SignUp />);
    }
};

export default LogAccount;