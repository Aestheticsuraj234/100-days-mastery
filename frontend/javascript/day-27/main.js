// *1. Let and Const

// var city = "Noida";
// var city = "Delhi";
// console.log(city); // Delhi

// {
//     console.log(city); // Delhi
// }

// let name = "Suraj";
// name = "Rohan";
// console.log(name); // Rohan
// let isProgrammer = true;
// {
//     let name = "Suraj";
//     console.log(name); // Suraj
//     console.log(isProgrammer); // true
// }

// console.log(name); // ReferenceError: name is not defined

// const PI = Math.PI;

// console.log(PI); // TypeError: Assignment to constant variable.

// *2. Template Literals

// let username = "Karan"
// let profession = "Developer";

// let myPara = `Hello, I am ${username}. I am a ${profession}.`;
// console.log(myPara);

// *3. Arrow Functions
// const Add = (a , b)=>{
//     return a + b;
// }

// const Add = a => console.log(a + 10);

// implicit return
// const greeting = () => "Hello World";

// let userData = [
//     {
//         name: "suraj",
//     },
//     {
//         name: "karan",
//     },
//     {
//         name: "rahul",
//     }
// ]

// const getUserData = () => (
//     userData.map(user => user.name)
// )

// console.log(getUserData());

// console.log(greeting())
// console.log(Add(2,3)); // 5

// *4. Default Parameters

// function SayMyName(name="AKASH"){
//     console.log(` SAYING MY NAME .... ${name}`);
// }

// SayMyName("NITESH");

// *5 destructuring OF OBJECTS & ARRAYS

// ? A. Object Destructuring
// let MyObj = {
//     name: "Suraj",
//     age: 21,
//     profession: "Developer",
//     mydata : {
//         city: "Noida",
//         country: "India"
//     }
// }

// // console.log(MyObj.name);
// // console.log(MyObj.age);
// // console.log(MyObj.profession);

// let {age , name , profession , mydata} = MyObj;
// let {city ,country}= mydata;

// console.log(name);
// console.log(age);
// console.log(profession);
// console.log(mydata);
// console.log(city);
// console.log(country);

// ? B. Array Destructuring

// let Fruits = ["🍎", "🍌", "🍇", "🍉", "🍊"];

// console.log(Fruits[0])

// let [apple , banana , grapes] = Fruits;

// console.log(apple);
// console.log(banana);
// console.log(grapes);

// *6. Rest & Spread Operators (...

// ? A. Spread Operator

// let personalData = {
//     name: "Suraj",
//     age: 21,
//     profession: "Developer",
// }

// let Address = {
//     city: "Noida",
//     country: "India"
// }

// let MyData = {
//     name:personalData.name,
//     age: personalData.age,
//     profession: personalData.profession,
//     city: Address.city,
//     country: Address.country

// }

// let MyData = {
//     ...personalData,
//     ...Address
// }

// console.log(MyData);

// // Array Spread Operator
// let fruits = ["🍎", "🍌", "🍇", "🍉", "🍊"];

// let snacks = ["🍕", "🍔", "🍟", "🍗", "🍖"];

// // let myFood = [fruits[0], fruits[1], fruits[2], fruits[3], fruits[4], snacks[0], snacks[1], snacks[2], snacks[3], snacks[4]];

// let myFood = [...fruits , ...snacks]
// console.log(myFood);

// ? B. Rest Operator

// function sum(...numbers){
//    return numbers.reduce((a,b)=> a+b);
// }

// console.log(sum(1,2 , 3 , 4 , 5 , 6, 7, 8 , 9 , 10 ,11 ,12 ,13 , 14 ,15))

// *7 Maps & Sets

// ? A. Maps
// let myMap = new Map();

// myMap.set("name", "Suraj");
// myMap.set("age", 21);
// myMap.set("profession", "Developer");

// console.log(myMap.get("name"));
// console.log(myMap.get("age"));
// console.log(myMap.get("profession"));

// ? B. Sets

// const numbers = new Set([1, 2, 3, 3,3 , 3 , 4]);
// console.log(numbers); // Set {1, 2, 3, 4}

// const colors = ["red", "green", "blue"];

// for (const color of colors) {
//   console.log(color);
// }

// *8. Optional Chaining

// const user = { profile: { name: "Alice" } };


// console.log(user.profile?.name); // Alice
// // console.log(user.address?.city)


// let username = null;

// console.log(username ?? "NO USERNAME")