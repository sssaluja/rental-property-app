import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
    return (
        <div>
            <BrowserView>
                <DesktopNavBar />
            </BrowserView>
            <MobileView>
                <MobileNavBar />
            </MobileView>
        </div>
    );
};

export default NavBar;