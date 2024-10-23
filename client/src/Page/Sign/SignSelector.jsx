import React from 'react';
import Logo from "../../assets/image/logo.png";
import './sign.scss'
import {Link} from "react-router-dom";
const SignSelector = () => {
    return (
        <div className='sign-selector'>
            <div className="ident">
                <img src={Logo} style={{maxWidth: '64px'}} alt="Fitess Logo"/>
                <h2>Fitess</h2>
                <p>Розпочніть свою фітнес-подорож</p>
            </div>

            <div className="trigger_buttons">
                <Link className='link_button button-sign-in' to={'/login'}>Авторзація</Link>
                <Link className='link_button button-sign-up' to={'/login'}>Реєстрація</Link>
            </div>
        </div>
    );
};

export default SignSelector;