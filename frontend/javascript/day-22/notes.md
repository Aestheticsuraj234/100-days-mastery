## **1. Higher-Order Functions (HOFs)**
### **Definition:**  
A **higher-order function** is a function that **takes another function as an argument or returns a function**.  

### **Why Use Higher-Order Functions?**  
- They make code **more reusable and modular**.  
- Improve **readability** and **maintainability**.  
- Allow for **functional programming patterns**.

### **Examples of Higher-Order Functions:**
#### **1.1 Function Taking Another Function as an Argument**
```javascript
function operate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using Higher-Order Function
console.log(operate(5, 3, add));      // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15
```
- Here, `operate` is a **higher-order function** because it takes `operation` (a function) as a parameter.  
- We pass `add` and `multiply` functions as arguments.

#### **1.2 Function Returning Another Function**
```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
```
- `createMultiplier` **returns another function**, making it a higher-order function.  
- `double` and `triple` are functions customized with different factors.

---

## **2. Callbacks**
### **Definition:**  
A **callback function** is a function **passed as an argument** to another function and executed later.

### **Why Use Callbacks?**  
- Handle **asynchronous operations** (e.g., API requests, file reading).  
- Reuse functions dynamically.  
- Avoid repetition of similar logic.

### **Example: Callback in Array Methods (`map`, `filter`, `reduce`)**
#### **2.1 Using Callbacks in `map()`**
```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```
- `map()` is a **higher-order function** that takes a **callback function** to transform each element.

#### **2.2 Callback in Asynchronous Code (`setTimeout`)**
```javascript
console.log("Before timeout");

setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("After timeout");
```
- `setTimeout` takes a callback function that runs **after 2 seconds**, demonstrating asynchronous execution.

---

## **3. Closures (Lexical Scope)**
### **Definition:**  
A **closure** is a function that **remembers** the variables from its **lexical scope** even when the function is executed outside that scope.

### **Lexical Scope vs. Closure**
- **Lexical Scope:** The function remembers where it was created and has access to variables in that scope.
- **Closure:** When a function is returned from another function, it **remembers its original scope**.

### **Example 1: Function Inside Function**
```javascript
function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World
```
- `innerFunction` **remembers** `outerVar`, even after `outerFunction` has finished execution.

### **Example 2: Private Variables Using Closures**
```javascript
function counter() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        }
    };
}

const myCounter = counter();
myCounter.increment(); // Output: 1
myCounter.increment(); // Output: 2
myCounter.decrement(); // Output: 1
```
- `count` **is private** because it's inside the closure.  
- Only `increment` and `decrement` can modify `count`.

### **Example 3: Loop & Closures Issue (Fixing with `let`)**
```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
// Output: 4, 4, 4 (because of `var`)
```
- The problem: `var` doesn’t have **block scope**, so the loop completes first, and `i` is 4 when the callbacks execute.

**Fix: Use `let`**
```javascript
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}
// Output: 1, 2, 3 (Corrected)
```
- `let` has **block scope**, creating a new variable for each loop iteration.

---

## **Summary Table**
| Concept | Description | Example |
|---------|-------------|---------|
| **Higher-Order Functions** | Functions that take another function as a parameter or return a function. | `map()`, `filter()`, function returning another function. |
| **Callbacks** | Functions passed as arguments and executed later. | `setTimeout(callback, 2000)`, `map()`, `filter()`. |
| **Closures** | Functions that "remember" variables from their parent scope. | Private variables in a counter function. |

