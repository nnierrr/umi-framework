import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm ";
import { connect } from "react-redux";

const AuthPage = () => {
    const [page, setPage] = useState("login");

    document.body.style = "background: #0984e3";

    const getPage = props => {
        setPage(props);
    };

    return (
        <div className="container">
            {page === "login" && <LoginForm getPage={getPage} />}
            {page === "register" && <RegisterForm getPage={getPage} />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        alert: state.alert,
    };
};

export default connect(
    mapStateToProps,
    { alert }
)(AuthPage);
