# **Box Model and Layout Basics**

## **1. Understanding the CSS Box Model**
The **CSS Box Model** is a fundamental concept that determines how elements are displayed and spaced in a webpage. Every HTML element is represented as a rectangular box consisting of the following layers:

### **Layers of the Box Model**
1. **Content** - The actual content inside the element (text, images, etc.).
2. **Padding** - Space between the content and the border.
3. **Border** - The edge surrounding the padding (can be styled).
4. **Margin** - Space outside the border, separating elements.

### **Diagram Representation**
```
----------------------------------
|          Margin               |
|  --------------------------   |
|  |      Border            |   |
|  |  --------------------  |   |
|  |  |    Padding      |  |   |
|  |  |  -------------- |  |   |
|  |  |  |  Content  |  |  |   |
|  |  |  -------------- |  |   |
|  |  --------------------  |   |
|  |                        |   |
|  --------------------------   |
----------------------------------
```

### **Example: Box Model in Action**
```css
.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 15px;
    background-color: lightblue;
}
```
```html
<div class="box">This is a box</div>
```
### **Breakdown**
- **Content:** `200px` width, `100px` height
- **Padding:** `20px` (added on all sides)
- **Border:** `5px` solid black
- **Margin:** `15px` space outside the border
- **Total Width Calculation:**  
  `Total Width = width + (left & right padding) + (left & right border) + (left & right margin)`  
  → `200px + 40px + 10px + 30px = 280px`

---

## **2. Width, Height, and `box-sizing`**
By default, **width** and **height** apply only to the **content**. However, using the `box-sizing` property, we can include padding and border in the total width/height.

### **box-sizing Property**
- `content-box` (default) → Width and height only apply to content.
- `border-box` → Width and height include padding and border.

### **Example: Without vs. With `box-sizing: border-box`**
```css
.box1 {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: content-box; /* Default */
}

.box2 {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    box-sizing: border-box;
}
```
### **Key Difference**
- `.box1` will have a total width greater than `200px` because padding and border are added separately.
- `.box2` will **always** be `200px` wide, as padding and border are included.

---

## **3. Display Property**
The `display` property controls how elements behave in the document flow.

### **Common Display Types**
| Property        | Description |
|----------------|------------|
| `block`        | Takes full width, starts on a new line (`div`, `p`, `h1` etc.) |
| `inline`       | Only takes space as per content, doesn't start on a new line (`span`, `a` etc.) |
| `inline-block` | Behaves like inline but allows width/height changes |
| `none`         | Hides the element completely |
| `flex`         | Enables flexbox layout |
| `grid`         | Enables grid layout |

### **Example: Block vs Inline**
```css
.block-element {
    display: block;
    width: 200px;
    background-color: lightcoral;
}

.inline-element {
    display: inline;
    width: 200px; /* Won't work as inline elements don’t accept width/height */
    background-color: lightgreen;
}
```
```html
<div class="block-element">Block Element</div>
<span class="inline-element">Inline Element</span>
```
### **Output**
- **Block element** takes full width and starts on a new line.
- **Inline element** only takes as much space as needed.

---

## **4. Inline-Block vs Inline vs Block**
| Property        | Can set width/height? | Starts on a new line? |
|----------------|---------------------|----------------------|
| `block`        | ✅ Yes               | ✅ Yes              |
| `inline`       | ❌ No                | ❌ No               |
| `inline-block` | ✅ Yes               | ❌ No               |

### **Example: Inline-Block**
```css
.inline-block-box {
    display: inline-block;
    width: 150px;
    height: 100px;
    background-color: lightblue;
    margin: 10px;
}
```
```html
<div class="inline-block-box">Box 1</div>
<div class="inline-block-box">Box 2</div>
<div class="inline-block-box">Box 3</div>
```
### **Output**
- Boxes will be inline (side by side) but will respect width and height.

---

## **5. Margin Collapse**
Margins of block elements can collapse when adjacent. The larger margin is applied instead of adding both.

### **Example of Margin Collapse**
```css
.box1 {
    margin-bottom: 20px;
    background-color: lightcoral;
}

.box2 {
    margin-top: 30px;
    background-color: lightgreen;
}
```
- Instead of `20px + 30px = 50px`, the total margin is `30px` (largest margin wins).

---

## **6. Centering Elements (Margin Auto)**
To center a block element horizontally:
```css
.center-box {
    width: 300px;
    margin: 0 auto;
    background-color: lightblue;
    text-align: center;
}
```

---

## **7. Practical Example: Card Layout**
```css
.card {
    width: 250px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 20px auto;
    text-align: center;
}

.card img {
    width: 100%;
    border-radius: 5px;
}
```
```html
<div class="card">
    <img src="https://via.placeholder.com/250" alt="Sample Image">
    <h3>Card Title</h3>
    <p>Some description here.</p>
</div>
```
### **Concepts Used**
✅ `border-radius`  
✅ `box-shadow`  
✅ `width`, `margin: auto` for centering  
✅ `padding` for spacing  

---

## **Summary**
- **Box Model** consists of `content`, `padding`, `border`, and `margin`.
- Use `box-sizing: border-box` to include padding & border inside width.
- `display` defines how elements behave (`block`, `inline`, `inline-block`).
- `margin auto` helps center block elements.
- **Inline-block** elements allow width/height but stay inline.
