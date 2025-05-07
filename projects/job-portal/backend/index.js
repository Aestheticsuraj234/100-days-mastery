import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js"
import { connectDB } from "./config/db.js";


dotenv.config()

const app = express()

connectDB()

app.use(express.json())
app.use(cookieParser())

app.get("/" , (req , res)=>{
    res.send("Welcome to JobHunter🔥")
})


app.use("/api/v1/user" , userRoutes);

app.listen(3000 , ()=>{
    console.log(`Server is up at http://localhost:3000`)
})