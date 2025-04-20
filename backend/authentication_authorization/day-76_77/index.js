import express from "express"
import crypto from "crypto"
import { format } from "path";

const app = express();


app.use(express.json())


// Generate RSA Key Pair

const generateKeys = ()=>{
    const {publicKey , privateKey} = crypto.generateKeyPairSync("rsa" , {
        modulusLength: 2048,
        publicKeyEncoding:{
            type:"pkcs1",
            format:"pem"
        },
        privateKeyEncoding:{
              type:"pkcs1",
            format:"pem"
        }
    })

    return {publicKey , privateKey}
}


const encrypt = (publicKey , message)=>{
    const encrypted = crypto.publicEncrypt(publicKey , Buffer.from(message))

    return encrypted.toString("base64")
}


const decrypt = (privateKey , message)=>{
    const decrypted = crypto.privateDecrypt(privateKey , Buffer.from(message , "base64"))

    return decrypted.toString("utf-8")
}

app.get("/" , (req , res)=>{
    res.send("Hello World")
} )


app.post("/encrypt" , (req , res)=>{
const {message} = req.body;
const encryptedData = encrypt(publicKey , message)

res.json({encryptedData})
})

app.post("/decrypt" , (req , res)=>{
    const {encryptedMessage} = req.body;
    const decrypted  = decrypt(privateKey , encryptedMessage)
    
    res.json({decrypted})
}
)

const keys = generateKeys();

const privateKey = keys.privateKey;
const publicKey = keys.publicKey;


app.listen(3000 , ()=>{
    console.log("Server started on port 3000")
    console.log("Public Key: \n" , publicKey)
    console.log("Private Key: \n" , privateKey)
})