import {Schema,model} from "mongoose"
const productSchema=new Schema(
    {
        //structue of product resource(productName,price,brand,productId)
        //productId(required)
        productId:{
            type:String,
            required:[true,"product id is required"],
        },
        //productName(required)
        productName:{
            type:String,
            required:[true,"product name is required"],
        },
        //price(required,min price 10000 and max price 50000)
        price:{
            type:Number,
            required:[true,"price is required"],
            min:[10000,"minimum price should be 10000"],
            max:[50000,"maximum price should not exceed 50000"],
    },
        //brand(required)
        brand:{
            type:String,
            required:[true,"name of the brand is required"],
        }
    }
)//generate product model
export const productModel=model("product",productSchema)