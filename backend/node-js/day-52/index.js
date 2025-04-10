import http from 'http'

const server = http.createServer((req , res)=>{
    if(req.url === "/"){
        res.write("Hello world from the our first server");
    }
    else if(req.url === "/about"){
        res.write("Hello world from the about page");
    }
    else if (req.url === "/contact"){
        res.write("Hello world from the contact page");
    }
    else {
        res.write("Hello world from the 404 page");
    }

    res.end();
})

server.listen(3000 ,()=>{
    console.log("Server is listening on port")
})


// const server = http.createServer((request , response)=>{

//     // console.log(request.method)
//     // console.log(request.url)
//     // console.log(request.headers)
//     // response.write("Hello world from the our first server");
//     // response.end();

//     const data = {
//         name:"Suraj",
//         age:20,
//         gender:"male",
//         message:"Hello World"
//     }

//     response.end(JSON.stringify(data))
// })


// server.listen(3000 ,()=>{
//     console.log("Server is listening on port")
// })