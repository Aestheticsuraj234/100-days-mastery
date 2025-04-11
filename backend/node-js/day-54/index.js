const EventEmitter = require("events");

const emitter = new EventEmitter();


// emitter.on("eventname" , cb)

// Hello world

// emitter.on("hello" , ()=>{
//     console.log("Hello World");
// })


// emitter.emit("hello")


// emitter.on("greet" , (username)=>{
//     // greet according to timing
//     const hour = new Date().getHours();

//     if(hour < 12){
//         console.log(`Good Morning ${username}`);
//     }
//     else if(hour < 18){
//         console.log(`Good Afternoon ${username}`);
//     }
//     else{
//         console.log(`Good Evening ${username}`);
//     }
// })

// emitter.emit("greet" , "Suraj")


// emitter.on("welcome" , (users)=>{
//     console.log(`Welcome ${users}`);
// })

// const data = ["Suraj" , "Ankit" , "Shubham"]

// data.forEach((user)=>{
//     emitter.emit("welcome" , user)
// })


emitter.on('orderPlaced', (orderId, item) => {
    console.log(`Order ${orderId} for ${item} received.`);
  });
  
  emitter.emit('orderPlaced', 123, 'Coffee');