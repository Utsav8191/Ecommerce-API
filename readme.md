# Ecommerce API

#About
This is an Ecommerce API made using Nodejs and MongoDB


Steps to use the App:
1. Run 'npm install' command on terminal in this projects directory
2. Start the server using "npm start"
3. Open postman
4. Make a get request on localhost:4000/products
5. The products should be visible

Steps to create a new product:
1. Start the server using "npm start"
2. Open postman
3. Put locahost:4000/products/create as the url 
4. Select body tab below the url textarea and then select x-www-form-urlencoded
5. Add id, name and quantity as the keys and set the desired values for the keys
6. Make a POST request
7. You should recieve a message saying "Product was added successfully".
8. The product is created and has been added to the database. You can check the product list by making a get request at localhost:4000/products

Steps to delete a product:
1. Copy the object id of the product you want to delete
2. Add the id of the product after the localhost:4000/products/
3. Make a delete request
4. You will receive a message saying "Successfully deleted the product"

Steps to update the quantity of a product: 
1. Copy the object Id of the product whose quantity you want to update
2. Put the id after localhost:4000/products/
3. After putting the id add "/update_quantity/?number=x" where x is the number by which you want to increase or decrease the quantity
4. The URL should be looking like "localhost:4000/products/{id}/update_quantity/?number={x}"
5. Make a POST request, you should get a message "Successfully updated the product quantity"


#TechStack

1. Nodejs
2. Express
3. MongoDB