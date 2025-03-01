
# **CSS Grid Parent Properties**
CSS Grid is a powerful layout system that allows you to design complex web layouts easily. Below are the important properties related to grid parents (the container element that has `display: grid;`).

## **1. gap Property**
- The `gap` property defines the spacing between grid items.
- It can be used as:
  - `row-gap` (for spacing between rows)
  - `column-gap` (for spacing between columns)
  - `gap` (shorthand for both row and column gaps)

### **Examples:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* 20px gap between both rows and columns */
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px; /* 20px gap between rows */
  column-gap: 10px; /* 10px gap between columns */
}
```

---

## **2. grid-template-columns**
Defines the number and size of columns in the grid.

### **a) What is `fr`?**
- `fr` stands for "fractional unit" and is used to distribute space proportionally.
- Example:
  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr; /* The second column is twice as big as the first and third */
  }
  ```

### **b) `repeat()` function**
- The `repeat()` function is used to create multiple columns/rows without writing them manually.
- Example:
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Creates 3 equal columns */
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Creates responsive columns */
  }
  ```

---

## **3. grid-auto-rows**
- Defines the height of rows that are automatically created (not explicitly defined in `grid-template-rows`).
- Example:
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px; /* Any new row will have a height of 100px */
  }
  ```

- If you want rows to expand based on content, use `minmax()`:
  ```css
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto); /* Minimum height is 100px, but can grow */
  }
  ```

---

## **4. justify-content (For Horizontal Alignment)**
Defines how the grid as a whole is positioned inside the grid container.

### **Values:**
- `start` → Aligns grid to the start.
- `center` → Centers the grid.
- `end` → Aligns grid to the end.
- `space-between` → Spaces items evenly, first item at the start, last at the end.
- `space-around` → Spaces items with equal space around them.
- `space-evenly` → Spaces items with equal space between and around.

### **Example:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center; /* The whole grid is centered */
}
```

---

## **5. align-content and align-items (For Vertical Alignment)**
- **`align-content`**: Aligns the entire grid along the vertical axis.
- **`align-items`**: Aligns individual grid items within their grid cells.

### **align-content Values:**
- `start` → Aligns at the top.
- `center` → Aligns in the center.
- `end` → Aligns at the bottom.
- `space-between` → Distributes rows evenly.
- `space-around` → Adds space around rows.
- `space-evenly` → Adds equal spacing.

### **align-items Values:**
- `stretch` (default) → Stretches items to fill their cells.
- `start` → Aligns items at the top.
- `center` → Aligns items in the center.
- `end` → Aligns items at the bottom.

### **Example:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 500px;
  align-content: center; /* Centers the whole grid vertically */
  align-items: start; /* Aligns items at the top of their grid cells */
}
```

---

# **CSS Grid Child Properties (Item Level)**
These properties are applied to individual grid items.

## **6. grid-column and grid-row**
Used to specify how many columns/rows a grid item spans.

### **grid-column-end**
Defines where a column ends.

```css
.item {
  grid-column-end: 4; /* Ends at column 4 */
}
```

### **grid-column Shorthand**
Instead of using `grid-column-start` and `grid-column-end`, you can use:
```css
.item {
  grid-column: 1 / 3; /* Starts at column 1, ends before column 3 */
}
```

### **grid-column with `span`**
Instead of specifying the end column explicitly, you can use `span`:
```css
.item {
  grid-column: 1 / span 2; /* Starts at column 1 and spans 2 columns */
}
```

---

## **7. grid-row**
Defines how many rows a grid item should span.

```css
.item {
  grid-row: 1 / span 4; /* Starts at row 1 and spans 4 rows */
}
```

---

## **8. grid-area (Shorthand for grid positioning)**
The `grid-area` property is a shorthand for setting:
1. `grid-row-start`
2. `grid-column-start`
3. `grid-row-end`
4. `grid-column-end`

### **Example:**
```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
/* This means:
   - Starts at row 1
   - Starts at column 1
   - Ends at row 3
   - Ends at column 3
*/
```

This allows you to place an item precisely in the grid.

---

# **Conclusion**
CSS Grid is extremely powerful for building flexible layouts. Understanding these properties will help you create responsive designs with ease. If you're working on real-world projects, try using `grid-template-areas` for named grid layouts.



## **Basic Grid Layout Without `grid-template-areas` or Media Queries**
### **HTML**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Layout</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="grid-container">
        <header class="header">Header</header>
        <aside class="sidebar">Sidebar</aside>
        <main class="main-content">Main Content</main>
        <footer class="footer">Footer</footer>
    </div>
</body>
</html>
```

---

### **CSS (`styles.css`)**
```css
/* Apply grid to the container */
.grid-container {
    display: grid;
    grid-template-columns: 200px auto; /* Sidebar fixed width, Main Content takes remaining space */
    grid-template-rows: 60px auto 50px; /* Fixed header and footer height */
    gap: 10px;
    height: 100vh;
}

/* Header: spans across both columns */
.header {
    background-color: #4CAF50;
    color: white;
    text-align: center;
    padding: 15px;
    grid-column: 1 / 3; /* Spans across both columns */
}

/* Sidebar: occupies the first column */
.sidebar {
    background-color: #f4f4f4;
    padding: 15px;
    grid-column: 1 / 2;
    grid-row: 2 / 3; /* Stays in row 2 */
}

/* Main Content: occupies the second column */
.main-content {
    background-color: #ddd;
    padding: 15px;
    grid-column: 2 / 3;
    grid-row: 2 / 3; /* Stays in row 2 */
}

/* Footer: spans across both columns */
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    grid-column: 1 / 3; /* Spans across both columns */
}
```

---

## **Explanation of CSS Grid Properties Used**
### **1. `grid-template-columns: 200px auto;`**
- The **first column (Sidebar)** is `200px` wide.
- The **second column (Main Content)** takes up the remaining space.

### **2. `grid-template-rows: 60px auto 50px;`**
- **Header:** `60px` fixed height.
- **Main Content + Sidebar:** `auto` (adjusts dynamically).
- **Footer:** `50px` fixed height.

### **3. `grid-column` and `grid-row`**
- **Header & Footer:** `grid-column: 1 / 3;` (Spans across both columns).
- **Sidebar:** `grid-column: 1 / 2; grid-row: 2 / 3;` (Occupies first column in row 2).
- **Main Content:** `grid-column: 2 / 3; grid-row: 2 / 3;` (Occupies second column in row 2).

---

## **How the Layout Looks**
📌 **Always Fixed Layout**
```
------------------------
|      Header         |
------------------------
| Sidebar |  Main Content  |
------------------------
|      Footer         |
------------------------
```


https://www.joshwcomeau.com/css/interactive-guide-to-grid/