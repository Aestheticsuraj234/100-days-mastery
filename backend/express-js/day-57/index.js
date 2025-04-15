import express from "express"
import dotenv from "dotenv"

import fs from "fs"
import path  from "path"

import publicRoutes from "./routes/public.routes.js"
import privateRoutes from "./routes/private.routes.js"
import { fileURLToPath } from "url"
import logMiddleware from "./middleware/logs.middleware.js"

dotenv.config()

const app = express();

const __filename = fileURLToPath(import.meta.url); // path to current file
const __dirname = path.dirname(__filename);


if(!fs.existsSync(path.join(__dirname , "logs"))){
    fs.mkdirSync(path.join(__dirname , "logs"))
}

app.use(express.json())

app.use(logMiddleware)

app.get("/" , (req , res)=>{
    res.status(200).json({
        message : "hello world"
    })
})


app.use("/public" , publicRoutes)
app.use("/private" , privateRoutes)

app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})