import React from 'react';
import logo from '../../images/holiday.png'
import '../../styles/DesktopNav.css'
import {Link} from 'react-router-dom'

const DesktopNavBar = () => {
    return (<div className="desktop_container">
        <div className="desktopNavLeft_container">
            <img src={logo} alt="Company Logo" className="logo"/>
        </div>

        <div className="desktopNavRight_container">
            <h3 className>For Sale</h3>
            <h3>To Rent</h3>
            <Link 
                to='/list-your-property'
                style={{textDecoration:'none', color:'black'}}
            >
                <h3>Sell your property</h3>
            </Link>
            <h3>Contact Us</h3>
        </div>
    </div>
    );
};

export default DesktopNavBar;