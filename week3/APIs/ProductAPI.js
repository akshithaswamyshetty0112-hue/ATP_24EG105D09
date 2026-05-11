//create product API with below operations
//create new product({productId,name,brand,pricec})
//read all products
//read all product by brand
//delete a product by id
import exp from 'express'
export const productApp=exp.Router()
let products=[]
//create new products
productApp.post('/products',(req,res)=>{
   //get product from client
   const newProduct=req.body
   //push product into products
products.push(newProduct)
   //send res
   res.json({message:"Product created"})
})
//read all products
productApp.get('/products',(req,res)=>{
    res.json({message:"all products",payload:products})
})
//read all product by brand
productApp.get('/products',(req,res)=>{
let product=products.map((productsObj)=>productsObj.brand)
res.json({message:"all products",payload:product})
})
//update a product by id
productApp.put('/products', (req, res) => {

    // get modified product
    let modifiedProduct = req.body;

    // find index
    let index = products.findIndex(
        productObj => Number(productObj.productId) === Number(modifiedProduct.productId)
    );

    // if product not found
    if (index === -1) {
        return res.json({ message: "product not found" });
    }

    // update product
    products.splice(index, 1, modifiedProduct);

    // send response
    res.json({ message: "product updated" });

});
//delete a product by id
productApp.delete('/products/:id', (req, res) => {

    // find id from url
    let idOfUr1 = Number(req.params.id);

    // find index
    let index1 = products.findIndex(
        (productsObj) => productsObj.productId === idOfUr1
    );

    if (index1 === -1) {
        return res.json({ message: "product not found to delete" });
    }

    // delete product
    products.splice(index1, 1);

    // response
    res.json({ message: "product deleted" });

});
// //delete user from index
// products.splice(index1,1)
// //response
// res.json({message:"product deleted"})
// })
