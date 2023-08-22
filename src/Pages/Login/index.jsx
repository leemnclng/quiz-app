// import React from "react";

import './index.css';
import LoginForm from "./components/LoginForm";

const LoginComp = () => {
    return (
        <div className="login-container">
            <div className='login-content'>
                <h1>Login</h1>
                <div>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginComp;

