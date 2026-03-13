//create min-express app(seperate route)
import exp from "express"
import { productModel } from "../models/productModel.js"
export const productApp=exp.Router()
//DEFINE PRODUCT REST API Routes
//create new product
productApp.post("/products",async(req,res)=>{
    //get new product obj from req
    const newProduct=req.body
    //create prod doc
    let newProductDocument=new productModel(newProduct)
    //save
    const result=await newProductDocument.save()
    console.log(result)
    //send res
    res.status(201).json({message:"product created"})
})
//read all products
productApp.get("/products",async(req,res)=>{
    //read all products from db
    let productList=await productModel.find();
    //send res
    res.json(productList)
})
//read products by objId
productApp.get("/products/:id",async(req,res)=>{
    // read obj by id from req params
    const pid=req.params.id//find product by id
    const productObj=await productModel.findById(pid)
    //if product not found
    if(!productObj){
        res.status(404).json({message:"product not found"})
    }
        //send res
        res.status(200).json({message:"product",payload:productObj})
    
})
//update a product by id
productApp.put("/products/:id",async(req,res)=>{
    const modifiedProduct=req.body
    const pid=req.params.id
    //find product by id
    const updateProduct=await productModel.findByIdAndUpdate(pid,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true}
    )
    //send res
res.status(200).json({message:"product modified",payload:updateProduct})

})
//delete product by id
productApp.delete("/products/:id",async(req,res)=>{
    const pid=req.params.id
    //find product by id
    const deleteProduct=await productModel.findByIdAndDelete(pid)
    if(!deleteProduct){
        return res.status(404).json({message:"product not found"})

    }
    //send res
    res.status(200).json({message:"product deleted",payload:deleteProduct})
})