const router = require('express').Router();
const { House } = require('../Models/House');
const formidable = require('formidable');
const cloudinary = require('cloudinary').v2;
const mongoose = require('mongoose');
const { response } = require('express');
require('dotenv').config()


// MONGO and Cloudinary  Config

const mongoURI = process.env.MONGO_URI;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


// Make the DB Connection
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if(error) {
        return console.log(error)
    }
    else {
        return console.log("DB Connection Successful");
    }
})

router.post('/api/house-listing', (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        
        const {price, city, state, numOfBedroom, numOfBathroom, numOfCarParking, isSaleOrRent} = fields;

        const { houseImage } = files; 

        cloudinary.uploader.upload(houseImage.path, {folder:'houseAgency/houses'}, async(error, res) => {
            if(error){
                console.log(error);
            } else {
                const image_url = res.url;
                const newHouse = new House({
                    house_location: {
                        state: state,
                        city: city
                    },
                    house_details: {
                        price: price,
                        isSaleOrRent: isSaleOrRent,
                        numOfBedroom: numOfBedroom,
                        numOfBathroom: numOfBathroom,
                        numOfCarParking: numOfCarParking,
                        house_image: image_url
                    }
                });

                const savedHouse = await newHouse.save();
                return response.status(200).json(savedHouse);
                
            }
        })

        // console.log('State: ', state);
        // console.log('City: ', city);
        // console.log('Number of Bedrooms: ', numOfBedroom);
        // console.log('Number of Bathrooms: ', numOfBathroom);
        // console.log('Number of Car Parkings: ', numOfCarParking);
        // console.log('Sale/ Rent ', isSaleOrRent);
        // console.log('House Image ', houseImage.path);
    })
})

module.exports = router;