import express from "express";


const app = express();

function sayHiMiddleware(req , res , next){
    console.log("hi🙋🏻‍♂️");
    next();
}

function sayHellloMiddleware(req , res , next){
    console.log("hello🙋🏻‍♀️");
    next();
}


// app.use(sayHiMiddleware)

app.get("/users" ,sayHiMiddleware ,sayHellloMiddleware ,  (req , res)=>{
    res.status(200).json({
        users : ["John" , "Jane" , "Alice" , "Bob"]
    })
})

app.get("/peoples" , (req , res)=>{
    res.status(200).json({
        peoples : ["John" , "Jane" , "Alice" , "Bob"]
    })
})

app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})


// *global middleware✅
// *specific route middleware✅
// *inbuilt middleware✅