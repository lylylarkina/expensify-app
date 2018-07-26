import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { LoginButton }  from '../components/LoginButton';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <p><b>Login with:</b></p>
            <LoginButton authType="google" startLogin={startLogin}><i className="fa fa-google" aria-hidden="true"></i></LoginButton>
            <LoginButton authType="facebook" startLogin={startLogin}><i className="fa fa-facebook" aria-hidden="true"></i></LoginButton>
            <LoginButton authType="twitter" startLogin={startLogin}><i className="fa fa-twitter" aria-hidden="true"></i></LoginButton>
            <LoginButton authType="github" startLogin={startLogin}><i className="fa fa-github" aria-hidden="true"></i></LoginButton>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: (authType) => dispatch(startLogin(authType))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
