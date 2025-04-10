const fs = require('fs');
const os = require('os');

console.log(__dirname , __filename)
fs.writeFile("./day-51/newFile.txt" , "Hello World" , (err)=>{
    if(err) throw err;
    console.log("File Created");
})

// // console.log(Object.getOwnPropertyNames(global))

// // setInterval(() => {
// //     console.log("Hello World");
    
// // }, 2000);

// global.console.log("Hello")

console.log(os.cpus().length)
// process.env.UV_THREADPOOL_SIZE = 16