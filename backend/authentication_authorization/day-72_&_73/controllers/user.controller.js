import { loginUser, registerUser } from "../services/user.service.js";


export const signup = async (req, res) => {
    try {
        const {username , password} = req.body

     const user = await registerUser(username , password);

        res.status(201).json({
            success:true,
            message:"User registered successfully",
            data:user
        })
        
    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:"Internal Server Error",
                error:error
            }
        )
    }
}

export const login = async (req, res) => {
    try {
        const {username , password} = req.body

        const user = await loginUser(username , password);

        req.session.userId = user._id;

        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            data:user
        })

    } catch (error) {
        res.status(500).json(
            {
                success:false,
                message:"Internal Server Error",
                error:error
            }
        )
    }
}