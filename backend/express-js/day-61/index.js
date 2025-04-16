import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import taskRoutes from "./routes/task.routes.js"
dotenv.config()



const app = express();

app.use(express.json())

app.use(session({
    secret:"random-secret-key",
    resave:false,
    saveUninitialized:false,
    cookie:{
      httpOnly:true,
      secure:false,
      maxAge:1000*60*60*24 // 1 day
    }
  }))

app.use(cookieParser())



app.get("/" , (req , res)=>{
    res.status(200).json({
        message : "Welcome to Task Manager API📔"
    })
})


app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/task" , taskRoutes);


app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})