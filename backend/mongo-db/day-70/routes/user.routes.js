import express from "express";
import User from "../models/user.model.js";

const userRoute = express.Router();

// CRUD operations

// 1. Create

userRoute.post("/create-user", async (req, res) => {
  try {
    // Get the data from the req body
    const { name, age, weight } = req.body;

    // Create a new user
    const newUser = new User({ name, age, weight });
    await newUser.save();

    res.status(201).json({
        success:true,
        message: "User created successfully",
        data: newUser
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
        success:false,
        message: "Something went wrong",
        error: error.message
    })
  }
});

// 2. read

userRoute.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

// 3. Update
router.put("/update-user/:id" , async(req , res)=>{
    const {id} = req.params;
    const {name , age , weight} = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id , {name , age , weight} , {new:true , runValidators:true});

        if(!updatedUser){
          return  res.status(401).json({
                success:false,
                message:"User not found"
            })
        }

        res.json({
            success:true,
            user:updatedUser
        })

    } catch (error) {
        console.log(error)
    res.status(500).json({
        success:false,
        message:error.message
    })
    }
})

//! 4. Delete

export default userRoute;
