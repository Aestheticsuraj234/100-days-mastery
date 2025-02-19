# Day-5: Introduction to CSS

## 1. What is CSS?
CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the color, font, size, spacing, and positioning of elements on a webpage.

## 2. CSS Syntax
A CSS rule consists of a **selector** and a **declaration block**:

```css
selector {
    property: value;
}
```
### Example:
```css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
```

### Breakdown:
- **Selector**: `h1` (targets all `<h1>` elements)
- **Property**: `color`, `font-size`, `text-align`
- **Value**: `blue`, `24px`, `center`

---
## 3. Different Ways to Apply CSS
There are three ways to apply CSS to HTML:

### (A) Inline CSS
Applied directly inside an HTML element using the `style` attribute.

```html
<p style="color: red; font-size: 18px;">This is an inline styled paragraph.</p>
```

**Pros:**
- Quick and easy to apply for small changes.
- Does not require an external file.

**Cons:**
- Not reusable.
- Hard to maintain for large projects.

---
### (B) Internal CSS
Defined within the `<style>` tag inside the `<head>` section of an HTML file.

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: green;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>This paragraph is styled using internal CSS.</p>
</body>
</html>
```

**Pros:**
- Better organization compared to inline CSS.
- Can style multiple elements within the same HTML file.

**Cons:**
- Not reusable across multiple pages.

---
### (C) External CSS (Recommended for Large Projects)
CSS rules are written in a separate `.css` file and linked to the HTML file using the `<link>` tag.

#### **styles.css** (External File)
```css
p {
    color: blue;
    font-size: 22px;
    text-align: justify;
}
```

#### **index.html** (HTML File)
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <p>This paragraph is styled using an external CSS file.</p>
</body>
</html>
```

**Pros:**
- Reusable across multiple pages.
- Makes code cleaner and easier to maintain.

**Cons:**
- Requires an additional HTTP request to load the CSS file.

---
## 4. CSS Selectors
CSS selectors define which HTML elements are targeted for styling.

### (A) Universal Selector (`*`)
Applies styles to all elements.
```css
* {
    margin: 0;
    padding: 0;
}
```

### (B) Element Selector
Targets a specific HTML element.
```css
h1 {
    color: red;
}
```

### (C) Class Selector (`.`)
Targets elements with a specific class.
```css
.button {
    background-color: blue;
    color: white;
}
```

### (D) ID Selector (`#`)
Targets an element with a specific ID.
```css
#header {
    font-size: 24px;
}
```

### (E) Group Selector (`A, B`)
Targets multiple elements at once.
```css
h1, p {
    text-align: center;
}
```

### (F) Descendant Selector (`A B`)
Targets an element inside another element.
```css
div p {
    color: green;
}
```

### (G) Child Selector (`A > B`)
Targets direct children of an element.
```css
nav > ul {
    list-style-type: none;
}
```





---
## 5. Basic Styling Properties
### (A) Colors
CSS allows you to define colors using names, HEX codes, RGB, or HSL.
```css
h1 {
    color: red;       /* Color name */
    
    color: #ff0000;   /* HEX code */
    color: rgb(255,0,0); /* RGB */
    color: hsl(0, 100%, 50%); /* HSL */
}
```

### (B) Fonts
You can set font styles, sizes, and families.
```css
p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: bold;
}
```

### (C) Text Alignment
Align text within an element.
```css
h1 {
    text-align: center;
}
```

### (D) Margins and Padding
- **Margin**: Space outside an element.
- **Padding**: Space inside an element, between the content and its border.
```css
div {
    margin: 20px;  /* Adds 20px space outside the element */
    padding: 10px; /* Adds 10px space inside the element */
    border: 2px solid black;
}
```

---
## Summary
1. CSS is used to style HTML elements.
2. CSS syntax consists of **selectors**, **properties**, and **values**.
3. CSS can be applied in three ways: **inline, internal, external**.
4. CSS selectors help target elements efficiently.
5. Basic styling includes **colors, fonts, text alignment, margins, and padding**.
