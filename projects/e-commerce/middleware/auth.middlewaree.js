import jwt from "jsonwebtoken";
import User from "../model/user.model.js";


export const protectedRoute = async ( req , res ,  next)=>{
    try {
        const accessToken = req.cookies.accessToken;

        if(!accessToken) {
            return res.status(401).json({
                message:"Unauthorized - No Access Token Provided"
            })
        }

        try {
            const decoded = jwt.verify(accessToken , process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findById(decoded.userId).select("-password")

            if(!user){
                return res.status(401).json({message:"User not found"})
            }

            req.user = user;

            next();
        } catch (error) {
            if(error.name === "TokenExpireError"){
                return res.status(401).json({message:"Unauthorized - Access tokenn expired"})
            }
        }
    } catch (error) {
        console.log("Error in protectRoute middleware", error.message);
		return res.status(401).json({ message: "Unauthorized - Invalid access token" });
    }
}


export const adminRoute = (req , res , next)=>{
    if(req.user && req.user.role === "admin"){
        next();
    }
    else {
        return res.status(403).json({message:"Access Denied - Admin Only"})
    }
}