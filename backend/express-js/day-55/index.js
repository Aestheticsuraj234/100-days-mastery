import express from "express";
import data from "./data.js";

const app = express();


app.use(express.json())

// *1. GET METHOD

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

// Industry Standard

app.get("/api/v1/users", (req, res) => {
  const { name } = req.query;
  if (name) {
    const user = data.filter((user)=>{return user.name === name})
    res.status(200).json(user);
  }

  res.status(200).json(data);
    
});

app.get("/api/v1/users/:id" , (req , res)=>{
    const {id} = req.params;
    const parsedId = parseInt(id);

    const user = data.find((user)=> user.id === parsedId);

    if(!user){
        res.status(404).send("User not found");
    }

    res.status(200).json(user);
})


app.post("/api/v1/users" , (req , res)=>{
    const { name, displayname } = req.body;

   

        
        const newuser = {
            id:data.length + 1,
            name,
            displayname
        }

        data.push(newuser);

        res.status(201).json({
            success : true,
            message:"User created successfully",
            data: newuser
            
        });
});

// PUT ( update all fields)

// PATCH (update specific fields)

// DELETE


app.listen(8000, () => {
  console.log("server is running on port 8000");
});
