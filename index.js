const express = require('express');
const app = express();
const port = 4000;

// Database
const db = require('./config/mongoose');

// urlencoded puts the data into req.body
app.use(express.urlencoded());

// routers
app.use('/', require('./routes/product_route'));

app.listen(port, (err)=>{
    if(err){console.log(`Error while starting the server at port: ${port}`)};
    console.log(`Server up and running at port: ${port}`);
})