let Person = {
    name:"Suraj",
    age:20,
    profession:"Software Engineer",
    greet:function(){
        console.log("Hello suraj")
    }
}

delete Person.greet;

console.log(Person);



// console.log(Object.keys(Person));

// console.log(Object.values(Person));

// console.log(Object.entries(Person));

// console.log(Person.hasOwnProperty("username"));

// Person.isProgrammer = true;

// console.log(Person);

// const car = { brand: "Toyota", model: "Corolla", year: 2022 };


const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = Object.assign(obj1, obj2);
console.log(merged); // Output: { a: 1, b: 2 }