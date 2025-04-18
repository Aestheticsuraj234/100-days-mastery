import express from "express";
import connectDB from "./config/db.config.js";

import userRoute from "./routes/user.routes.js";

const app = express();

app.use(express.json());

connectDB()

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.use("/api/v1/users" , userRoute)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});