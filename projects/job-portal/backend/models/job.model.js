import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Company",
        required:true
    },
    jobTitle:{
        type:String,
        required:true,
    },
    
    jobDesc:{
        type:String,
        required:true,
    },
    tags:[String],
    salaryRange:{
        min:Number,
        max:Number
    },
    jobRole:{
        workLocation:{
            type:String,
            enum:["remote" , "onsite" , "hybrid"],
            required:true
        },
        department:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true
        },
        jobType:{
            type:String,
            enum:["full-time" , "part-time" , "contract" , "internship"],
            required:true
        }
    }
},{timestamps:true})

export default mongoose.model("Job" , jobSchema)