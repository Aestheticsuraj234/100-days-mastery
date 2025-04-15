import express from "express";
import { generateToken } from "../utils/token.utils.js";



const router = express.Router();


router.get("/generate-token" , (req , res)=>{
    // generate token
const token = generateToken();
    // response to the client with token

    res.status(200).json({
        message:"token generated successfully",
        token
    })
})

router.get("/" , (req , res)=>{
    res.status(200).json({
        message : "Welcome to the home page🍇"
    })
})


export default router