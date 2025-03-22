# **ES6 Features in JavaScript**

ES6 (ECMAScript 2015) introduced many powerful features that made JavaScript more efficient and readable. Below are the key features with examples:

---

## **1. Let and Const (Block Scope Variables)**  
### `let` (Mutable) & `const` (Immutable) replace `var` (Function-scoped).
```js
let name = "John";
name = "Doe"; // Allowed

const PI = 3.14;
PI = 3.1415; // ❌ Error: Assignment to constant variable
```
✅ **Use `let` when you need to reassign values, and `const` when values should remain constant.**

---

## **2. Template Literals (String Interpolation)**
### Allows embedding variables inside strings using **backticks (`)**
```js
let user = "Alice";
let greeting = `Hello, ${user}! Welcome to ES6.`; 
console.log(greeting); // Hello, Alice! Welcome to ES6.
```
✅ **Useful for multi-line strings and dynamic values.**

---

## **3. Arrow Functions (Shorter Function Syntax)**
### Compact syntax for writing functions.
```js
// Traditional function
function add(a, b) {
  return a + b;
}

// ES6 Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```
✅ **Removes the need for `function` keyword and `{}` for single-line functions.**  

---

## **4. Default Parameters**
### Assign default values to function parameters.
```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Sam")); // Hello, Sam!
```
✅ **Prevents `undefined` values when no argument is passed.**

---

## **5. Destructuring Assignment (Extract Values from Objects & Arrays)**
### **Object Destructuring**
```js
const person = { name: "John", age: 25, city: "New York" };
const { name, age } = person; 

console.log(name); // John
console.log(age); // 25
```
### **Array Destructuring**
```js
const numbers = [10, 20, 30];
const [first, second] = numbers;

console.log(first); // 10
console.log(second); // 20
```
✅ **Makes it easy to extract values from arrays and objects.**

---

## **6. Spread and Rest Operators (`...`)**
### **Spread Operator (`...`)** – Expands an array or object
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; 

console.log(arr2); // [1, 2, 3, 4, 5, 6]
```
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // { a: 1, b: 2, c: 3 }
```
### **Rest Operator (`...`)** – Gathers multiple values into an array
```js
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```
✅ **Used for copying, merging, and flexible function parameters.**

---

## **7. Enhanced Object Literals**
### Allows shorthand property and method declarations.
```js
const name = "Alice";
const age = 30;

const user = { name, age, greet() { console.log("Hello!"); } };

console.log(user); // { name: "Alice", age: 30, greet: [Function] }
user.greet(); // Hello!
```
✅ **Reduces redundancy when defining objects.**

## **8. `Map` and `Set` (New Data Structures)**
### **Map** (Key-Value pairs, unlike Objects, allows any type as keys)
```js
const users = new Map();
users.set(1, "Alice");
users.set(2, "Bob");

console.log(users.get(1)); // Alice
```
### **Set** (Stores unique values)
```js
const numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); // Set {1, 2, 3, 4}
```
✅ **Improves performance when working with collections.**

---

## **9. `for...of` Loop (Iterate over Arrays & Strings)**
```js
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
// red
// green
// blue
```
✅ **Simpler than `forEach()` or traditional `for` loops.**

---

## **10. Optional Chaining (`?.`)**
### Avoids errors when accessing deep nested properties.
```js
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name); // Alice
console.log(user.address?.city); // undefined (instead of error)
```
✅ **Prevents runtime errors when properties are missing.**

---

## **11. Nullish Coalescing Operator (`??`)**
### Returns right-hand value only if left-hand value is `null` or `undefined`
```js
const user = null;
console.log(user ?? "Guest"); // Guest
```
✅ **Useful for setting default values.**

---

## **Conclusion**
ES6 brought many improvements that make JavaScript cleaner, more readable, and powerful. Mastering these features will significantly improve your coding efficiency.
