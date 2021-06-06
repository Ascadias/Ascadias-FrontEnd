import React from 'react'
import logo from '../../assets/images/logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <React.Fragment>
        <div>
            <img src={logo} alt="Logo de Ascadias" title="Ascadias"></img>
        </div>
        </React.Fragment>
    )
}

export default Logo
