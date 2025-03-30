In JavaScript, **truthy** and **falsy** values are used to determine the truth value of expressions in a boolean context (e.g., `if` statements, `while` loops, etc.). Here's an explanation along with examples:

---

### **Falsy Values**
These are values that evaluate to `false` in a boolean context. There are only **six specific falsy values** in JavaScript:

1. **`false`**: The keyword `false` itself.
2. **`0`**: The number zero.
3. **`''` or `""`**: An empty string.
4. **`null`**: Represents the intentional absence of any object value.
5. **`undefined`**: Represents an uninitialized variable or missing property.
6. **`NaN`**: Stands for "Not-a-Number," typically the result of invalid mathematical operations.

#### Example:
```javascript
if (false) console.log("This won't run");
if (0) console.log("This won't run");
if ('') console.log("This won't run");
if (null) console.log("This won't run");
if (undefined) console.log("This won't run");
if (NaN) console.log("This won't run");
```

---

### **Truthy Values**
Anything that is **not falsy** is considered **truthy**. This includes almost everything else in JavaScript. Below are some common examples of truthy values:

1. **Non-zero numbers**: Any number other than `0`, including negative numbers.
   ```javascript
   if (42) console.log("This will run");
   if (-1) console.log("This will run");
   ```

2. **Non-empty strings**: Strings with any content, even a single space.
   ```javascript
   if ("Hello") console.log("This will run");
   if (" ") console.log("This will run");
   ```

3. **Objects**: Any object, including arrays and functions.
   ```javascript
   if ({}) console.log("This will run"); // Empty object
   if ([]) console.log("This will run"); // Empty array
   if (() => {}) console.log("This will run"); // Function
   ```

4. **`true`**: The boolean value `true`.
   ```javascript
   if (true) console.log("This will run");
   ```

5. **Special cases**:
   - Strings like `"0"` or `"false"` are truthy because they are non-empty strings.
     ```javascript
     if ("0") console.log("This will run");
     if ("false") console.log("This will run");
     ```
   - Even `new Boolean(false)` is truthy because it's an object.
     ```javascript
     if (new Boolean(false)) console.log("This will run");
     ```

---

### **How to Check Truthy/Falsy**
You can use the `Boolean()` function or double negation (`!!`) to explicitly check whether a value is truthy or falsy:

```javascript
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log(Boolean(42));         // true
console.log(Boolean("Hello"));    // true
console.log(Boolean([]));         // true
console.log(Boolean({}));         // true
```

Alternatively, using `!!`:
```javascript
console.log(!!0);                 // false
console.log(!!"Hello");           // true
```

---

### **Summary Table**

| **Value**              | **Truthy/Falsy** |
|-------------------------|------------------|
| `false`                | Falsy            |
| `0`                    | Falsy            |
| `''` or `""`           | Falsy            |
| `null`                 | Falsy            |
| `undefined`            | Falsy            |
| `NaN`                  | Falsy            |
| Non-zero numbers       | Truthy           |
| Non-empty strings      | Truthy           |
| Objects (e.g., `{}`, `[]`) | Truthy       |
| Functions              | Truthy           |
| `true`                 | Truthy           |

---

### **Final Answer**
- **Falsy values**: `false`, `0`, `''`, `null`, `undefined`, `NaN`.
- **Truthy values**: Everything else, including non-zero numbers, non-empty strings, objects, arrays, and functions.

**Boxed Answer**:
```plaintext
Falsy: false, 0, '', null, undefined, NaN
Truthy: Everything else
```