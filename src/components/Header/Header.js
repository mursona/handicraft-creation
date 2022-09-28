import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHoldingCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <header className='header-container' >
            <div  className='header'>
            <h2><span><FontAwesomeIcon icon={faHandsHoldingCircle}></FontAwesomeIcon></span> HANDICRAFT-CREATION</h2>
            </div>
            <h3>Handi Craft Design Created by our Creator's</h3>
        </header>
    );
};

export default Header;