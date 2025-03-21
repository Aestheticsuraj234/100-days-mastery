// function  add(a , b){
//     return a+b;
// }

// let res = add(10 , 20);
// console.log(res);


// function operates(a , b , operation){
//     return operation(a , b);
// }

// function add(number1 , number2){
//     return number1 + number2
// }

// function mul(number1 , number2){
//     return number1 * number2
// }

// let res = operates(10 , 20 , mul)
// // let res = operates(10 , 20 , add)

// console.log(res);


// function createMultiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// let ten = createMultiplier(10);

// console.log(ten(5))



// const array = [1, 2, 3, 4, 5];

// const newArray = array.map((nums)=>{
//     return 2 * nums
// })

// console.log(newArray);


// setTimeout(()=>{
//     console.log("Hello")
// } , 3000)



function helloByName(){
    let name = "Suraj"
    console.log(age);
    return function(){
        let age = 20;
        console.log("Hello " + name + " your age is " + age);
    }
}


let res = helloByName()

res()