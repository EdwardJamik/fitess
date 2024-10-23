import React, {useEffect, useState} from 'react';
import Logo from '../../assets/image/logo.png';
import './preloader.scss'
const Preloader = ({reg}) => {


    return (
        <div className='preloader'>
            <img src={Logo} style={{maxWidth: '64px'}} alt="Fitess Logo"/>
            <h2>Fitess</h2>
            {reg && <p>Розпочніть свою фітнес-подорож</p>}
            <div className="sign">
                <div className="login"></div>
            </div>
        </div>
    );
};

export default Preloader;