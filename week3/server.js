//create http server
import exp from "express";
const app=exp();

import { userApp } from "./APIs/UserAPI.js";
import { productApp } from "./APIs/ProductAPI.js";
//use body parser middleware
app.use(exp.json())
//create custom middleware
function middleware1(req,res,next){
    //res.json({message:"this res is from middleware1"})
    console.log("middleware1 executed")
    next()
    
}
function middleware2(req,res,next){
   // res.json({message:"middleware 2 response"})
   console.log("middleware2 executed")
}
// //use middleware1
// app.use(middleware1)
// app.use(middleware2)

app.use('/user-api',userApp);
app.use('/product-api',productApp);
//set a port number
const port=3000;
//assign port number to http server
app.listen(port,()=>{console.log(`server listening to port ${port}...`)})
