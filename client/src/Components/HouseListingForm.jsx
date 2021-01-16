import React from 'react';
import '../styles/houseListing.css'

const HouseListingForm = () => {
    return (
        <div className="houseListing_container">
            <div className="form">
                <label>Name</label>
                <input type="text" placeholder="Name"></input>
                <label>Price</label>
                <input type="number" placeholder="Price of House"></input>
                <label>Location</label>
                <input type="text" placeholder="House Location"></input>
                <label>Sale or Rent</label>
                <select>
                    <option>...</option>
                    <option>Sale</option>
                    <option>Rent</option>
                </select>
                <label>Number of bedrooms</label>
                <input type="number" placeholder="No of Bedrooms" />
                <label>Number of bathrooms</label>
                <input type="number" placeholder="No of Bathrooms" />
                <label>Number of car-parkings</label>
                <input type="number" placeholder="No of Car-parkings" />
            </div>
        </div>
    );
};

export default HouseListingForm;