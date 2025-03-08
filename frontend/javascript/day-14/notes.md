# **Operators in JavaScript**  
Operators are symbols that perform operations on values and variables. JavaScript provides different types of operators, classified as follows:

---

## **1. Arithmetic Operators**  
Used for mathematical calculations.  

| Operator | Description       | Example (`let a = 10, b = 3;`) | Output |
|----------|-----------------|---------------------------|--------|
| `+`      | Addition         | `a + b`                   | `13`   |
| `-`      | Subtraction      | `a - b`                   | `7`    |
| `*`      | Multiplication   | `a * b`                   | `30`   |
| `/`      | Division         | `a / b`                   | `3.33` |
| `%`      | Modulus (Remainder) | `a % b`                | `1`    |
| `**`     | Exponentiation   | `a ** b` (10³)            | `1000` |

### **Example:**
```js
let x = 5, y = 2;
console.log(x + y); // 7
console.log(x ** y); // 25
console.log(x % y); // 1
```

---

## **2. Assignment Operators**  
Used to assign values to variables.  

| Operator | Description              | Example (`let x = 10;`) | Equivalent To | Output |
|----------|--------------------------|-----------------|-------------|--------|
| `=`      | Assign                   | `x = 10`         | -           | `10`   |
| `+=`     | Add and assign            | `x += 5`        | `x = x + 5` | `15`   |
| `-=`     | Subtract and assign       | `x -= 3`        | `x = x - 3` | `7`    |
| `*=`     | Multiply and assign       | `x *= 2`        | `x = x * 2` | `20`   |
| `/=`     | Divide and assign         | `x /= 5`        | `x = x / 5` | `2`    |
| `%=`     | Modulus and assign        | `x %= 3`        | `x = x % 3` | `1`    |
| `**=`    | Exponentiation and assign | `x **= 2`       | `x = x ** 2` | `100` |

### **Example:**
```js
let a = 10;
a += 5; // a = a + 5 (now a = 15)
a *= 2; // a = a * 2 (now a = 30)
console.log(a);
```

---

## **3. Comparison Operators**  
Used to compare two values. Returns `true` or `false`.

| Operator | Description                | Example (`let x = 5, y = '5'`) | Output |
|----------|----------------------------|-----------------|--------|
| `==`     | Equal (checks value)       | `x == y`        | `true`  |
| `===`    | Strict equal (checks value & type) | `x === y` | `false` |
| `!=`     | Not equal                  | `x != y`        | `false` |
| `!==`    | Strict not equal            | `x !== y`       | `true`  |
| `>`      | Greater than                | `x > 3`         | `true`  |
| `<`      | Less than                   | `x < 3`         | `false` |
| `>=`     | Greater than or equal       | `x >= 5`        | `true`  |
| `<=`     | Less than or equal          | `x <= 4`        | `false` |

### **Example:**
```js
console.log(10 == '10');  // true
console.log(10 === '10'); // false
console.log(5 > 3);       // true
console.log(5 !== '5');   // true
```

---

## **4. Logical Operators**  
Used to combine multiple conditions.

| Operator | Description                 | Example (`let a = true, b = false;`) | Output |
|----------|-----------------------------|-----------------|--------|
| `&&`     | AND (both must be true)     | `a && b`        | `false` |
| `||`     | OR (either must be true)    | `a || b`        | `true`  |
| `!`      | NOT (negates the value)     | `!a`            | `false` |

### **Example:**
```js
let x = 10, y = 5;
console.log(x > 5 && y < 10); // true
console.log(x > 15 || y < 10); // true
console.log(!(x > 5)); // false
```

---


## **5. Ternary Operator**  
Shortened version of `if-else`.  

**Syntax:**  
```js
condition ? expression1 : expression2;
```

**Example:**
```js
let age = 18;
let message = age >= 18 ? "You can vote" : "You cannot vote";
console.log(message);
```

---

## **6. Type Operators**  

| Operator    | Description                       | Example |
|------------|----------------------------------|--------|
| `typeof`   | Returns the data type of a variable | `typeof 42` → `"number"` |

### **Example:**
```js
console.log(typeof "Hello"); // string
console.log(typeof 100); // number

```

---

## **Summary Table**

| Category            | Operators                                    |
|--------------------|--------------------------------------------|
| Arithmetic         | `+`, `-`, `*`, `/`, `%`, `**`              |
| Assignment         | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`   |
| Comparison        | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical           | `&&`, `||`, `!`                             |
| Ternary           | `condition ? true_value : false_value`     |
