import { Schema,model } from "mongoose";
const EmployeeSchema=new Schema({
    name:{
        type:String,
        required:[true,"employee name is required"],
       minLength:[4,"min length of employee name is four characters"]
    },
    email:{
        type:String,
       required:[true,"email required"],
        unique:[true,"email already exists"],
    },
    mobile:{
        type:Number,
        required:[true,"mobile number is required"],
        minLength:[10,"mobile number shall have min 10 numbers"],
        maxLength:[12,"mobile number cannot exceed more than 12 numbers"]
    },
    designation:{
        type:String,
        required:[true,"designation required"]
    },
    companyName:{
        type:String,
        required:[true,"Company name required"]
    },
},
       { 
        strict:"throw",
         timestamps:true,
        versionKey:false,
    }
    
)
export const EmployeeModel=model("employee",EmployeeSchema)