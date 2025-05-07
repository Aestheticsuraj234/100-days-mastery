import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  companySize: {
    type: String,
  },
  location: {
    type: String,
  },
  address: {
    type:String
  },
  emails: {
    type: [String],
  },

  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true // should be an employer
  }
},{timestamps:true});


export default mongoose.model("Company" , companySchema)