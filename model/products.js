const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        required: true,
        unique: true 
    },
    name: {
        type: String,
        required: true,
    },
    quantity : {
        type: Number,
        required : true,
    }
});


const Products = mongoose.model('products', productSchema);
module.exports = Products;