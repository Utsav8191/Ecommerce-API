const Products = require('../model/products');

module.exports.products = async (req, res)=> {
    try{
        // Fetching all the products from the "products" Collection
        const productList = await Products.find({});
        // Will return an array of objects containing all the documents in products collection
        console.log(productList);
        return res.status(200).json({
            message: "Stock Products",
            data: {
                products: productList
            }
        })

    } catch(err) {
        // Handle Errors
        console.log(`Error fetching the products ${err}`);
        return res.status(500).json({
            message: "Error fetching the products",
            error: err
        })
    }
}

module.exports.addProduct = async (req, res)=> {
    try {
        const {id, name, quantity} = req.body;
        const addedProduct = await Products.create({
            id,
            name,
            quantity
        })
        return res.status(200).json({
            message: "Product was added successfully",
            data: {
                product: addedProduct
            }
        })        
    }catch(err) {
        // handle errors
        console.log(`Error while adding the product ${err}`);
        return res.status(500).json({
            message : "Error while adding the product",
            error: err
        })
    }
}

module.exports.deleteProduct = async (req, res)=> {
    try{
        // Destructuring ID from params 
        const {id} = req.params;
        await Products.deleteOne({id});
        return res.status(200).json({
            message: "Successfully deleted the product",
            data: {}
        })

    }catch(err) {
        // handle error
        console.log(`Error while deleting the product ${err}`);
        return res.status(500).json({
            message: "Error while deleting the product",
            error : err
        });
    }
}
module.exports.updateQuantity = async (req,res) => {
    try{
        const {id} = req.params;
        const {number} = req.query;
        // Using FindOneAndUpdate query to search the product by ID and Update
        const productToUpdate = await Products.findOneAndUpdate({id}, {quantity: number});

        return res.status(200).json({
            message: "Successfully updated the product quantity",
            data : {
                updated_Product : productToUpdate
            }
        })


    } catch(err){
        // handle errors
        console.log(`Error while updating the quantity of the product: ${err}`);
        return res.status(500).json({
            message:"Error while updating the product",
            error : err 
        })
    }
} 