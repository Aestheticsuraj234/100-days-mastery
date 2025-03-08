// // *function declare a function
// function funcname(){

// }

// function greet() {
//   console.log("Good Morning guys i am suraj");
//   console.log("Good Afternoon guys i am suraj");
//   console.log("Good Evening guys i am suraj");
//   console.log("Good Night guys i am suraj");
// }

// greet()


function add(){
    return 2+2;
}

console.log(add())


function minus(){
  console.log(2-2);
}
 minus();

// console.log(minus())


// arguments and parameters

// 1. parameters
function greetUsername(username){
    console.log("Good Morning " + username);
}

greetUsername("Akash")
function multiply(num1 , num2){
    return num1 * num2
}
let result = multiply(10 , 5)
console.log(result)
function divide(num1 , num2){
    return num1 / num2
}


// arguments
console.log(divide(10 , 5))





// Anonymous function ( koi bhi naam nhi hota)

const addTwoNumbers = function (a, b){
    return a+b;
}
console.log(addTwoNumbers(10 , 20))


// Arrow funnctions
const PrintFruitNames = (fruits) => console.log(fruits)
PrintFruitNames(["apple" , "banana" , "mango"])


const square = x => x * x; // No need for parentheses with one parameter
console.log(square(4)); // 16


(
    function(){
        console.log("Hello from IIFE");
    }
)()