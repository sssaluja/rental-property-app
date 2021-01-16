const mongoose = require('mongoose');
const HouseSchema = mongoose.Schema({
    house_location: {
        state: {type:String, required: true},
        city:  {type:String, required: true},
    },
    house_details: {
        price: {type: Number, required: true},
        isSaleOrRent: {type: String, required: true},
        numOfBedroom: {type: String, required: true},
        numOfBathroom: {type: String, required: true},
        numOfCarParking: {type: String, required: true},
        house_image: {type: String, required: true}
    }
});

const House = mongoose.model('House', HouseSchema);

module.exports = { House }