import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser("randomsecret"))

app.get("/set-cookies" , (req , res)=>{
    // res.cookie("name" , "suraj"); old way

    res.cookie("token" , crypto.randomUUID().toString() , {
        maxAge:1000 * 60 * 60 * 24 * 7,
        httpOnly:true,
        signed:true
    } )

    res.status(200).json({
        message : "cookies set successfully"
    })
})


app.get("/get-cookies" , (req , res)=>{
   const token = req.cookies.token;

    

    res.status(200).json({
        token
    })
})


app.get('/clear-cookie', (req, res) => {
    res.clearCookie('token');
    res.send('Cookie has been cleared');
  });





app.listen(8000 , ()=>{
    console.log("server is running on port 8000");
})

 // const cookies = JSON.parse(req.headers.cookie) // req.headers.cookie

    // console.log(req.cookies) // undefined

    // extract from the headers