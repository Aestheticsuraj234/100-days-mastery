// *1. Creating the promises

// let myPromise = new Promise()


// let myPromise =  new Promise(()=>{
//     console.log("Hello this is my Promise")
// })

// console.log(myPromise)

// let myPromise = new Promise((resolve , reject)=>{
//     console.log("Hello this is my Promise")
//     resolve("Hello world i am resolved✅");
  
// })

// // .then ====> resolve()
// //  .catch =====> reject()


// myPromise
// .then(()=>{
//     console.log("I am from then")
// })
// .catch(()=>{
//     console.log("I am from catch")
// })


// let myPromise = new Promise((resolve , reject)=>{
  
//     // resolve({
//     //     id:"00ased12345cxvgfgfdwe5555bghy",
//     //     name:"Suraj",
//     //     age:20
//     // });

//     reject("Hello world i am reject❌")
  
// })

// // .then ====> resolve()
// //  .catch =====> reject()


// myPromise
// .then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.error(error)
// })


let checkAgePromise = new Promise((resolve , reject)=>{
    let age = 100;

    if(age >=18){
        resolve("You can vote🟢");
    }

    else {
        reject("You can't vote🔴");
    }
})


checkAgePromise
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Always")
})