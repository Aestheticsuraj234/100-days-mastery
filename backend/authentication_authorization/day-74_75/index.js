import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import privateRoutes from "./routes/private.routes.js";

dotenv.config()

const app = express();

app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("MongoDB connected")}).catch((error)=>{console.log(error)})


app.use("/auth" , authRoutes)

app.use("/private" , privateRoutes)



app.listen(process.env.PORT , ()=>{console.log("Server started on port 3000")})