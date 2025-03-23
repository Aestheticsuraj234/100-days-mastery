# **JavaScript Modules & Import/Export**  

JavaScript modules allow us to break code into smaller, reusable pieces. Using `import` and `export`, we can share functionalities between files.  

---

## **1. Why Use Modules?**  
- Maintainability: Code is easier to read and manage.  
- Reusability: Functions, objects, and variables can be reused across different files.  
- Encapsulation: Keeps variables and functions scoped to their respective modules, avoiding global pollution.  

---

## **2. Exporting in JavaScript Modules**  
We can export values from a module using **Named Exports** or **Default Exports**.  

### **A. Named Exports**  
Allows exporting multiple values from a single module.  

#### **Example (Exporting Multiple Items)**  
```js
// math.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export class Calculator {
    subtract(a, b) {
        return a - b;
    }
}
```
#### **Example (Importing Named Exports)**  
```js
// main.js
import { PI, add, Calculator } from './math.js';

console.log(PI); // 3.14159
console.log(add(5, 3)); // 8

const calc = new Calculator();
console.log(calc.subtract(10, 4)); // 6
```
✅ **Named exports require `{}` when importing**.  
✅ **You must use the exact exported names**.  

---

### **B. Default Exports**  
Each module can have **only one** default export.  

#### **Example (Exporting a Default Value)**  
```js
// greet.js
export default function greet(name) {
    return `Hello, ${name}!`;
}
```
#### **Example (Importing Default Export)**  
```js
// main.js
import greet from './greet.js';

console.log(greet('Alice')); // Hello, Alice!
```
✅ **No `{}` needed when importing default exports**.  
✅ **You can rename the import as you like**.  

---

### **C. Combining Named and Default Exports**  
```js
// utils.js
export const sayHello = () => console.log('Hello!');
export default function greet(name) {
    return `Hi, ${name}!`;
}
```
```js
// main.js
import greet, { sayHello } from './utils.js';

greet('Bob');  // Hi, Bob!
sayHello();    // Hello!
```

---

## **3. Renaming Imports & Exports**  
### **Renaming Named Exports**
```js
// file.js
export { add as sum };
```
```js
// main.js
import { sum } from './file.js';
console.log(sum(4, 6)); // 10
```

### **Renaming Named Imports**
```js
import { add as plus } from './math.js';
console.log(plus(5, 5)); // 10
```

---

## **4. Importing Everything (`* as alias`)**
```js
// math.js
export const PI = 3.14;
export function multiply(a, b) {
    return a * b;
}
```
```js
// main.js
import * as math from './math.js';

console.log(math.PI); // 3.14
console.log(math.multiply(3, 4)); // 12
```

---

## **5. Dynamic Imports (Lazy Loading)**
Dynamic imports allow loading modules on demand.  

```js
// main.js
import('./math.js').then((module) => {
    console.log(module.PI);
});
```

✅ Useful for performance optimization and code splitting.

---

## **6. Module Script in HTML**
Modules must be loaded using `<script type="module">`.  

```html
<script type="module" src="main.js"></script>
```

✅ Ensures modules are executed in strict mode (`"use strict"` by default).  
✅ Supports `defer`, ensuring the script runs after the HTML is fully parsed.  

---

### **7. Common Mistakes & Best Practices**
❌ **Can't use `import` without `type="module"` in HTML**  
✅ Always use `import`/`export` within a module-based file.  
❌ **Default export can’t be imported using `{}`**  
✅ `import defaultExport from 'file.js'`, not `{ defaultExport }`.  
❌ **Path issues in imports**  
✅ Always use relative (`./file.js`) or absolute paths (`/modules/file.js`).  

