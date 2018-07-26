import React from 'react';
import { connect } from 'react-redux';

export class LoginButton extends React.Component {
    startLoginClick = () => {
        this.props.startLogin(this.props.authType);
    }
    render() {
        return (
            <button className="button-icon" onClick={this.startLoginClick}>{this.props.children}</button>
        )
    };
};

export default LoginButton;