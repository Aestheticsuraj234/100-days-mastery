# **Flexbox Layout – Detailed Notes**  

## **What is Flexbox?**  
Flexbox (Flexible Box) is a CSS layout model that provides an efficient way to arrange items within a container, even if their sizes are dynamic. It helps create responsive designs with ease.

### **Flex Container and Flex Items**
1. **Flex Container**: The parent element with `display: flex;`
2. **Flex Items**: The direct children of the flex container.

### **How to Enable Flexbox?**
```css
.container {
    display: flex;
}
```
Now, all direct children of `.container` become **flex items**.

---

## **Flexbox Properties**

### **1. Container Properties**
These properties are applied to the **flex container**.

### **1.1 `display`**
- Enables flexbox on an element.
- **Values**:  
  - `flex` → Block-level flex container.
  - `inline-flex` → Inline-level flex container.

**Example:**
```css
.container {
    display: flex; /* Enables Flexbox */
}
```

---

### **1.2 `flex-direction`**
- Defines the **main axis direction**.
- **Values**:
  - `row` (default) → Items placed from left to right.
  - `row-reverse` → Items placed from right to left.
  - `column` → Items placed from top to bottom.
  - `column-reverse` → Items placed from bottom to top.

**Example:**
```css
.container {
    display: flex;
    flex-direction: row; /* Items arranged in a row */
}
```

---

### **1.3 `justify-content`**
- Aligns flex items along the **main axis**.
- **Values**:
  - `flex-start` (default) → Items start from the left.
  - `flex-end` → Items start from the right.
  - `center` → Items centered.
  - `space-between` → First and last items at edges, others evenly spaced.
  - `space-around` → Equal space around all items.
  - `space-evenly` → Equal space between all items.

**Example:**
```css
.container {
    display: flex;
    justify-content: space-between;
}
```

---

### **1.4 `align-items`**
- Aligns flex items along the **cross axis**.
- **Values**:
  - `stretch` (default) → Items stretch to fill container.
  - `flex-start` → Aligns items at the start.
  - `flex-end` → Aligns items at the end.
  - `center` → Centers items.
  - `baseline` → Aligns items based on their text baseline.

**Example:**
```css
.container {
    display: flex;
    align-items: center;
}
```

---

### **1.5 `align-content`**
- Controls spacing **when there are multiple flex lines**.
- Works only when `flex-wrap: wrap;` is set.
- **Values**:
  - `flex-start`
  - `flex-end`
  - `center`
  - `space-between`
  - `space-around`
  - `stretch` (default)

**Example:**
```css
.container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
```

---

### **1.6 `flex-wrap`**
- Defines whether items should **wrap** or remain on one line.
- **Values**:
  - `nowrap` (default) → All items in one row.
  - `wrap` → Items move to the next line if needed.
  - `wrap-reverse` → Like `wrap`, but in reverse order.

**Example:**
```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

---

### **1.7 `gap` (Row & Column Gap)**
- Adds space between flex items.
- Can be used as:
  - `row-gap: 20px;`
  - `column-gap: 20px;`
  - `gap: 20px;` (for both row and column)

**Example:**
```css
.container {
    display: flex;
    gap: 20px;
}
```

---

## **2. Flex Item Properties**
These properties are applied to the **flex items**.

### **2.1 `order`**
- Controls the order of flex items.
- Default value is `0`. Lower values appear first.

**Example:**
```css
.item1 { order: 2; }
.item2 { order: 1; } /* Will appear before item1 */
```

---

### **2.2 `flex-grow`**
- Defines how much an item will grow **relative to other items**.
- Default is `0` (no growth).
- A value of `1` means it can grow.

**Example:**
```css
.item {
    flex-grow: 1;
}
```

---

### **2.3 `flex-shrink`**
- Defines how much an item will **shrink** relative to others.
- Default is `1` (shrinks if needed).
- A value of `0` prevents shrinking.

**Example:**
```css
.item {
    flex-shrink: 0; /* Will not shrink */
}
```

---

### **2.4 `flex-basis`**
- Defines the **initial size** of an item before `flex-grow` or `flex-shrink` is applied.
- Accepts values like `px`, `%`, `auto`.

**Example:**
```css
.item {
    flex-basis: 100px;
}
```

---

### **2.5 `flex` (Shorthand)**
Shorthand for:
```css
flex: flex-grow flex-shrink flex-basis;
```
**Example:**
```css
.item {
    flex: 1 1 100px; /* Grow: 1, Shrink: 1, Basis: 100px */
}
```
- `flex: 1;` → Equal distribution.
- `flex: auto;` → Default behavior.
- `flex: none;` → Fixed size.

---

### **2.6 `align-self`**
- Allows individual flex items to override `align-items`.
- **Values**:
  - `auto` (default)
  - `flex-start`
  - `flex-end`
  - `center`
  - `baseline`
  - `stretch`

**Example:**
```css
.item {
    align-self: flex-start;
}
```

---

## **Complete Code Example**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            background-color: #ddd;
            padding: 20px;
        }
        .item {
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            text-align: center;
            flex: 1; /* Equal width */
        }
        .item:nth-child(2) {
            flex: 2; /* Bigger item */
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

---

## **Conclusion**
Flexbox is a powerful layout model that simplifies responsive designs. With properties like `justify-content`, `align-items`, `flex-wrap`, and `flex-grow`, you can control the arrangement of elements efficiently.