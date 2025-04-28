import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.lib.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());


connectDB()

app.get("/" , (req , res)=>{
    res.send("Hello World")
})


app.use("/api/v1/auth" , authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});