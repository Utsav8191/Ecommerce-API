// Importing mongoose module to be used
const mongoose = require('mongoose');

// mongoose.connect connects the mongoDB collection with our app
mongoose.connect("mongodb://0.0.0.0:27017/ecommerceAPI")
    .then(()=>{console.log("Successfully connected to database")})
    .catch((err)=>{console.log(`Error connecting to mongoDB database: ${err}`)});