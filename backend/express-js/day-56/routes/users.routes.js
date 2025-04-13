import express from "express";

const router = express.Router();

// 2 endpoints 
// 1. get all users
// 2. get only one user

router.get("/get-all-users" , (req , res)=>{
    res.status(200).json({
        users : ["John" , "Jane" , "Alice" , "Bob"]
    })
})


router.get("/get-one-user" , (req , res)=>{
    res.status(200).json({
        user: "John"
    })
})


export default router