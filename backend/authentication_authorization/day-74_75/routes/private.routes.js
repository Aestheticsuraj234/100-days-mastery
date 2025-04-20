import express from "express"
import { authenticateToken } from "../middleware/auth.middleware.js";


const privateRoutes = express.Router()

privateRoutes.get("/user" , authenticateToken , (req , res)=>{
    try {
        
        res.send(req.user)

    } catch (error) {
        
        res.status(500).json({message:"Internal Server Error" , error})
    }
})


export default privateRoutes;