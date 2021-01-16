import React from 'react';
import banner from '../images/sample.jpg'

const Banner = () => {
    return (
        <div className="banner_continer">
            <img src={banner} alt="Homepage Banner" />
        </div>
    );
};

export default Banner;