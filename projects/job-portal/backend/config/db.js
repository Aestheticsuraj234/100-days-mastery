import mongoose from "mongoose";


export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to db🟩")
    } catch (error) {
        console.log(error)
        throw new Error()
    }   
}