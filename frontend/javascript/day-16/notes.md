## **Functions in JavaScript**
Functions in JavaScript are reusable blocks of code that perform a specific task. They allow better modularity and code reuse.

### **1. Function Declaration vs. Function Expression**
#### **Function Declaration**
A function declaration defines a function with the `function` keyword. It can be called before its definition due to **hoisting**.

```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John")); // Hello, John!
```
- **Hoisted**: Can be used before the declaration.
- **Named Function**: The function has a name (`greet`).

#### **Function Expression**
A function expression assigns a function to a variable. Unlike function declarations, function expressions are **not hoisted**.

```js
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John")); // Hello, John!
```
- **Not hoisted**: Cannot be called before its definition.
- **Can be anonymous**: The function does not need a name.

### **2. Arrow Functions (`() => {}`)**
Arrow functions provide a more concise syntax and automatically bind `this` from their lexical scope.

```js
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```
- **Implicit return**: If the function body has only one statement, the `return` keyword is not needed.
- **No `this` binding**: Useful in callbacks and event handlers.

##### **Arrow Function with Multiple Statements**
```js
const multiply = (a, b) => {
    let result = a * b;
    return result;
};

console.log(multiply(4, 2)); // 8
```

##### **Arrow Function with a Single Parameter**
```js
const square = x => x * x; // No need for parentheses with one parameter
console.log(square(4)); // 16
```

### **3. IIFE (Immediately Invoked Function Expression)**
An IIFE is a function that executes immediately after being defined. It is used to avoid polluting the global scope.

```js
(function() {
    console.log("This function runs immediately!");
})(); 
// Output: This function runs immediately!
```

##### **IIFE with Arrow Function**
```js
(() => {
    console.log("Arrow function IIFE!");
})();
```

##### **IIFE with Parameters**
```js
(function(name) {
    console.log(`Hello, ${name}!`);
})("John"); 
// Output: Hello, John!
```

### **4. Function Parameters and Default Values**
Function parameters allow values to be passed into a function. If a parameter is not provided, it becomes `undefined`.

##### **Default Parameters**
You can set default values for parameters to avoid `undefined`.

```js
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Alice")); // Hello, Alice!
```

##### **Rest Parameters (`...args`)**
Rest parameters allow functions to accept an indefinite number of arguments.

```js
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

##### **Function with Multiple Parameters**
```js
function fullName(firstName, lastName = "Doe") {
    return `${firstName} ${lastName}`;
}

console.log(fullName("John")); // John Doe
console.log(fullName("John", "Smith")); // John Smith
```

---

## **Summary**
| Concept                        | Explanation |
|---------------------------------|-------------|
| Function Declaration            | Uses `function keyword`. Hoisted. |
| Function Expression             | Assigned to a variable. Not hoisted. |
| Arrow Function (`=>`)           | Short syntax, no `this` binding. |
| IIFE                            | Runs immediately after being defined. |
| Default Parameters              | Sets default values for function parameters. |


