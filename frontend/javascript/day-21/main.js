// let num1 = 10;
// let num2 = 10.23
// let num3 = -10;


// let infinity = Infinity;
// let max_number = Number.MAX_VALUE;
// let min_number = Number.MIN_VALUE;
// let min_safe_integer = Number.MIN_SAFE_INTEGER;
// let max_safe_integer = Number.MAX_SAFE_INTEGER;

// let not_a_number = NaN;

// console.log(isNaN(9));


// Math Object
// console.log(Math.PI)

// console.log(Math.E)

// console.log(Math.round(78.545))

// console.log(Math.floor(78.545))
// console.log(Math.ceil(78.545))

// console.log(Math.abs(-78.545))

// console.log(Math.sqrt(169))

// console.log(Math.pow(3 , 3))

// console.log(Math.random() )

// // write a otp generator code

// function generateOTP(length){
//     const otp = Math.random() * length;
//     return Math.floor(otp);
// }

// console.log(generateOTP(89765))



// Date Objects

let currentDate = new Date();

console.log(currentDate.getFullYear())

console.log(currentDate.getMonth())

console.log(currentDate.getDate())

console.log(currentDate.getDay())

console.log(currentDate.getHours())

console.log(currentDate.getMinutes())

console.log(currentDate.getSeconds())


let newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(5);  // June (0-based)
newDate.setDate(15);
console.log(newDate);