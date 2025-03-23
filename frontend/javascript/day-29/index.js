// const myObj = {
//     firtname:"Suraj",
//     lastName:"Jha",
//     greet:function(){
//         return `Hello ${this.lastName}`
//     }
// }

// console.log(myObj.greet());

// console.log(this);

// const person = {
//     name: "Alice",
//     greet: () => {
//       console.log(`Hello, my name is ${this.name}`);
//     },
//   };

//   person.greet(); // Output: Hello, my name is undefined

function Person(name , age , profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}

const person1 = new Person("Suraj" , 20 , "Software Engineer")

console.log(person1)


const h1 = document.getElementById("h1")

h1.addEventListener("click" , (e)=>{
    console.log(this)
})