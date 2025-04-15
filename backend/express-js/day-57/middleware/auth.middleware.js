import { validateToken } from "../utils/token.utils.js";

export const authMiddleware = (req , res , next)=>{
    const token = req.headers.authorization;

    console.log(token);

    if(token && validateToken(token)){
       req.user = {name:"suraj" , token:token , email:"tBtKg@example.com" , id:crypto.randomUUID()}
       next();
    }

    else {
        res.status(401).json({
            message:"unauthorized"
        })
    }
}

