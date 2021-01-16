import React from 'react';
import logo from '../../images/holiday.png'
import '../../styles/MobileNav.css'

const MobileNavBar = () => {
    return (
        <div className="mobileNav_container">
            <img src={logo} alt="Company Logo" />
        </div>
    );
};

export default MobileNavBar;