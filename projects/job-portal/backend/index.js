import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.routes.js"
import companyRoutes from "./routes/company.routes.js"
import jobRoutes from "./routes/job.routes.js"
import applicationRoutes from "./routes/application.routes.js"

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
app.use("/api/v1/company" , companyRoutes)
app.use("/api/v1/job" , jobRoutes)
app.use("/api/v1/application" , applicationRoutes)

app.listen(3000 , ()=>{
    console.log(`Server is up at http://localhost:3000`)
})