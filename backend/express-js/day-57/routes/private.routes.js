import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";


const router = express.Router();

router.get("/dashboard" ,authMiddleware ,  (req , res)=>{
    const user = req.user
    res.status(200).json({
        message : "welcome to the dashboard",
        user
    })
})



export default router