import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unqiue:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        
    },
    mobileNumber:{
        type:String,
        required:true
    },
    role:{
        type:[String],
        enum:["employer" , "candidate"],
        required:true
    }
},{timestamps:true})


export default mongoose.model("User" , userSchema);