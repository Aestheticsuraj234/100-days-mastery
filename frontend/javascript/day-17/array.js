// let marks = [90 , "89" , true , null , [12,34,50]]
// console.log(marks)

// let fruits = ["apple" , "banana" , "mango" , ["🍇" , "🍈" , "🍉"]]

// fruits[2] = "orange"

// fruits[10] = "kiwi"

// console.log(fruits)

// console.log(fruits[3][2])

// Methods in Javascript

// let myArr = [1,2,3,4,5,6,7,8,9];

// let res = myArr.slice(1 , 8);

// console.log(res);

// myArr.unshift(0 , -1 , -2 , -3);

// myArr.shift();


// let res = myArr.pop();
// console.log(res);
// console.log(myArr);

// let res = myArr.push(10);
// console.log(res);
// console.log(myArr);

// console.log(myArr.length);



// ? splice(start, deleteCount, item1, item2, ...)

// let fruits = ["🍎", "🍌", "🍒" , "🍇"];
// *Splice
// *element remove

// let res = fruits.splice(0 , 2);
// console.log(res);
// console.log(fruits);


//* element add

// let res = fruits.splice(4 , 0 , "🍉" , "🍓");
// console.log(res);
// console.log(fruits);
// *element replace

// let res  = fruits.splice(2 , 1 , "🍉");
// console.log(res);
// console.log(fruits);


// let fruits = ["apple", "banana"];
// let moreFruits = ["cherry", "date"];
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // ["apple", "banana", "cherry", "date"]

// let fruits = ["🍎", "🍌", "🍒" , "🍇"];

// console.log(fruits.includes("🥭"))

// Higher order function ( function ke under function ko call krta hai )

// let marks = [90 , 80 , 45, 54 , 58 , 75];


// // Map()
// let res = marks.map((value , index , array)=>{
//     return value * 2
// })

// console.log(res);
// console.log(marks);



// forEach method 

// marks.forEach((value , index , array)=>{
    
//     console.log(value);
// })


// let numbers = [1, 2, 3, 4 , 5 , 6 , 7 , 77 , 88 , 40];
// let even = numbers.filter((num) => num % 2 === 0);
// console.log(even); // [2, 4]

// let amount = [10, 20, 30, 40, 50];

// let total = amount.reduce((acc, currentValue , index , array)=>{
//     console.log("Acc",acc);
//     console.log("Current Value",currentValue);
//     return acc + currentValue
// } , 0)

// console.log(total);

// 0 + 10 = 10;
// acc = 10;

// 10 + 20 = 30;
// acc = 30;

// 30 + 30 = 60;
// acc = 60

// 60 + 40 = 100;
// acc = 100

// 100 + 50 = 150;
// acc = 150