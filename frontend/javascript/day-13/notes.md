# JavaScript Basics: Variables & Data Types

## What is JavaScript?
JavaScript (JS) is a high-level, interpreted programming language that is widely used for creating dynamic and interactive web applications. It is a core technology of the web, alongside HTML and CSS.

1. website ( frontend , backend , database);
2. applications
3. blockchain
4. desktop application
5. AI & ML
6. DSA

### Key Features of JavaScript:
- **Lightweight & Fast**: Executes in the browser without needing compilation.
- **Interpreted Language**: Runs line by line in the browser.
- **Multi-Paradigm**: Supports functional, object-oriented, and imperative programming.
- **Event-Driven**: Listens to user interactions (clicks, inputs, etc.).
- **Asynchronous**: Uses callbacks, promises, and async/await for handling asynchronous operations.
- **Platform-Independent**: Runs on any OS with a browser or Node.js.

## History of JavaScript
- **1995**: Created by Brendan Eich at Netscape as "Mocha."
- **1996**: Renamed "LiveScript," later changed to "JavaScript."
- **1997**: Standardized as ECMAScript (ES1).
- **2009**: ES5 introduced major improvements.
- **2015**: ES6 (ECMAScript 2015) brought modern features like `let`, `const`, arrow functions, template literals, etc.
- **Present**: Regular updates improve performance, security, and capabilities.

---

## JavaScript Variables
Variables in JavaScript store data that can be referenced and manipulated. JavaScript allows three ways to declare variables:

### 1. Using `var` (Old Way - Avoid using it now)
```javascript
var name = "John";
console.log(name);
```
- Function-scoped
- Can be re-declared and updated

### 2. Using `let` (Modern Way)
```javascript
let age = 25;
age = 30;
console.log(age);
```
- Block-scoped
- Can be updated but not re-declared

### 3. Using `const` (Recommended for constants)
```javascript
const pi = 3.14;
console.log(pi);
```
- Block-scoped
- Cannot be updated or re-declared

---

## JavaScript Data Types
JavaScript has two main types: **Primitive** and **Reference (Objects)**.

### 1. Primitive Data Types (Stored directly in memory)
#### String
```javascript
let str = "Hello, World!";
console.log(typeof str); // "string"
```
#### Number
```javascript
let num = 42;
console.log(typeof num); // "number"
```
#### Boolean
```javascript
let isJSFun = true;
console.log(typeof isJSFun); // "boolean"
```
#### Undefined
```javascript
let notDefined;
console.log(typeof notDefined); // "undefined"
```
#### Null
```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" (JS quirk)
```
#### Symbol (ES6)
```javascript
let sym = Symbol("unique");
console.log(typeof sym); // "symbol"
```
#### BigInt (ES11)
```javascript
let bigNumber = 9007199254740991n;
console.log(typeof bigNumber); // "bigint"
```

---

### 2. Reference (Object) Data Types (Stored in memory as references)
#### Object
```javascript
let person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"
```
#### Array
```javascript
let colors = ["red", "green", "blue"];
console.log(typeof colors); // "object"
```
#### Function
```javascript
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // "function"
```

---

## Type Conversion
JavaScript allows implicit and explicit type conversion.

### Implicit Conversion (Type Coercion)
```javascript
console.log("5" + 5); // "55" (String)
console.log("5" - 2); // 3 (Number)
console.log(true + 2); // 3
```

### Explicit Conversion
```javascript
let numStr = "100";
let numVal = Number(numStr);
console.log(typeof numVal); // "number"
```

---

## Summary
- JavaScript is a dynamic language used for web development.
- It has **primitive** and **reference** data types.
- Use `let` and `const` instead of `var`.
- Type conversion can be implicit (automatic) or explicit (manual).

### Practice Questions
1. Declare a `const` variable and try changing its value. What happens?
2. Convert a boolean `true` to a string and print the result.
3. Create an object representing a car with properties `brand`, `model`, and `year`.


