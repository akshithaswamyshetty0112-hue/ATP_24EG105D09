//create express app
import exp from "express"
import {connect} from "mongoose"
import { userApp } from "./APIs/userAPI.js"
import cookieParser from "cookie-parser"
import { productApp } from "./APIs/productAPI.js"
import { verifyToken } from "./middleware/verifyToken.js"
import { config } from "dotenv"

config();
const app=exp()
app.use(exp.json())
const port=process.env.PORT ||4000
//connect to DB server
async function connectDB(process.env.DB_URL){
   try{
    await connect("mongodb://localhost:27017/anuragdb2")
    console.log("DB connection is success")
    app.use('/user-api',userApp)
    app.use('/product-api',productApp)
    //strt server
app.listen(4000,()=>console.log("server on port 4000"))

   }catch(err){
    console.log("err in DB connection:",err)
   }
}
connectDB()
//error handling middleware
app.use((err,req,res,next)=>{
   res.json({message:"error occured",error:err.message})
})