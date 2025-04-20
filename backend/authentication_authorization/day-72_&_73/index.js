import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import { connectDB } from "./config/db.config.js";


import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";

dotenv.config();



const app = express();

app.use(express.json());

connectDB();

// session config
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{maxAge: 1000 * 60 * 60 * 24} // 1 day
}))



app.get("/" , (req , res)=>{
    res.send("hello")
})



app.use("/api/user" , userRouter);
app.use("/api/task" , taskRouter);

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})