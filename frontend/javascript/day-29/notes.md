# **`this` Keyword in JavaScript**

The `this` keyword in JavaScript refers to an object. The value of `this` depends on **where** and **how** it is used.

---

## **1. `this` in Global Scope**
In the global execution context (outside any function), `this` refers to the **global object**:
- In browsers, it refers to `window`.
- In Node.js, it refers to `global`.

```javascript
console.log(this); // In browser: Window object
```

---

## **2. `this` Inside an Object Method**
When `this` is used inside an object method, it refers to the **object itself**.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

🔹 **Explanation:**  
Here, `this.name` refers to `person.name` because `greet()` is called on `person`.

---

## **3. `this` in a Regular Function**
In a regular function (not inside an object), `this` refers to the **global object** (`window` in browsers).

```javascript
function show() {
  console.log(this);
}

show(); // In browser: Window object
```

🔹 **Note:** In **strict mode** (`"use strict";`), `this` in a regular function is `undefined`.

```javascript
"use strict";

function show() {
  console.log(this);
}

show(); // Output: undefined
```

---

## **4. `this` in an Arrow Function**
Arrow functions **do not** have their own `this`. They inherit `this` from their surrounding scope.

```javascript
const person = {
  name: "Alice",
  greet: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is undefined
```

🔹 **Why?**  
- The arrow function `greet()` does not have its own `this`.
- It takes `this` from its surrounding scope, which is the **global object**.

✅ **Fix:** Use a regular function.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

---

## **5. `this` in a Constructor Function**
When used inside a **constructor function**, `this` refers to the new object being created.

```javascript
function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice");
console.log(person1.name); // Output: Alice
```

🔹 **Explanation:**  
- `this.name = name` assigns the value to the new object `person1`.

---

## **6. `this` in a Class**
In JavaScript classes, `this` refers to the instance of the class.

```javascript
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  showBrand() {
    console.log(`Car brand: ${this.brand}`);
  }
}

const myCar = new Car("Toyota");
myCar.showBrand(); // Output: Car brand: Toyota
```

---

## **7. `this` in Event Listeners**
In an event listener, `this` refers to the element that triggered the event.

```javascript
document.getElementById("btn").addEventListener("click", function () {
  console.log(this); // Output: <button> element
});
```

🔹 **Fix with Arrow Function:**  
If using an arrow function, `this` will refer to the outer scope.

```javascript
document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // Output: Window object
});
```

---

## **8. `this` in `call()`, `apply()`, and `bind()`**
You can manually set the value of `this` using these methods.

### **🔹 Using `call()`**
```javascript
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

greet.call(person1); // Output: Hello, my name is Alice
greet.call(person2); // Output: Hello, my name is Bob
```

### **🔹 Using `apply()`**
Similar to `call()`, but arguments are passed as an array.

```javascript
function introduce(age, city) {
  console.log(`I am ${this.name}, ${age} years old from ${city}`);
}

introduce.apply(person1, [25, "New York"]); // Output: I am Alice, 25 years old from New York
```

### **🔹 Using `bind()`**
`bind()` returns a **new function** with `this` permanently set.

```javascript
const boundGreet = greet.bind(person1);
boundGreet(); // Output: Hello, my name is Alice
```

---

## **Summary Table**

| Context                | Value of `this` |
|------------------------|----------------|
| Global scope          | Global object (`window` in browsers) |
| Object method         | The object itself |
| Regular function      | Global object (or `undefined` in strict mode) |
| Arrow function        | Inherits `this` from surrounding scope |
| Constructor function  | The newly created object |
| Class method         | The instance of the class |
| Event listener       | The element that triggered the event |
| `call()`, `apply()`  | The object passed as the first argument |
| `bind()`             | Returns a function with a fixed `this` |

---

## **Conclusion**
- `this` behaves **differently** depending on where it's used.
- Use **regular functions** for methods inside objects.
- Use **arrow functions** when you need `this` to refer to the outer scope.
- Use `call()`, `apply()`, or `bind()` to manually set `this`.
