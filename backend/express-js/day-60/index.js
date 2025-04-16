import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { authenticate } from "./middleware/user.middleware.js";

dotenv.config()

const app = express();

app.use(session({
    secret:process.env.SESSION_SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false , maxAge:1000 * 60 * 60 * 24 * 7}
}))



app.get("/login" , (req , res)=>{
    req.session.user = {id:crypto.randomUUID() , name:"suraj" , email:"tBtKg@example.com"}

    res.status(200).json({
        message : "Welcome to login page",
        user:req.session.user
    })
})

app.get("/get-user" ,authenticate ,  (req , res)=>{
    res.status(200).json({
        user:req.session.user
    })
})


app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})