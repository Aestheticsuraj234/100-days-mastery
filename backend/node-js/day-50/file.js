const fs = require('fs');


// 1. reading file

// fs.readFile("./day-50/example.txt" ,"utf-8" , (err , data)=>{
//     if(err) throw err;
//     console.log(data);
// }) // async function


// const data = fs.readFileSync("./day-50/example.txt" ,"utf-8")

// console.log(data);

// 2. Writing Files

// fs.writeFile("./day-50/newFile.txt" , "Hello World" , (err)=>{
//     if(err) throw err;
//     console.log("File Created");
// })


// fs.writeFileSync("./day-50/newFile.txt" , "Hello World this is suraj")
// appendfile


// deletefile

fs.unlink("./day-50/newFile.txt",(err) => {
    if (err) throw err;
    console.log('File deleted!');
  })


  // 8826545277 -- message