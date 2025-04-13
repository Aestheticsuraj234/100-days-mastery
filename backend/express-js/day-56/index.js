import express from "express";
import userRoutes from "./routes/users.routes.js"

const app = express();


app.use("/api/v1/user",userRoutes)

// todo routes
// books routes
// movies routes

app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})

// express routes


