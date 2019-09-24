import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm ';

const AuthPage = () => {

    const [page, setPage] = useState("login");

    document.body.style = "background: #0984e3";

    const getPage = (props) => {
        setPage(props);
    }

    return (
        <div className="container">
            {page === "login" && <LoginForm getPage={getPage} />}
            {page === "register" && <RegisterForm getPage={getPage} />}
        </div>
    );
}

export default AuthPage
