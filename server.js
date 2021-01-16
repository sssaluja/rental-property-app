const express = require('express');
const cors = require('cors')
const app = express();


//****************************MIDDLEWARE******************** */
app.use(cors())
//********************************************************** */

/** Route Constants */
const houseListingRoute = require('./Routes/HouseListing')

app.use(houseListingRoute)

/**SERVER ENTRY */
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log('Server running on port : ',PORT)
})
