# **Day 2: Forms, Tables, Lists, Links, and Images**

---

## ✅ **Forms**

### **Creating a Form**
```html
<form action="submit.php" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <input type="submit" value="Submit">
</form>
```

### **Input Fields**
```html
<input type="text" placeholder="Enter text">
<input type="password" placeholder="Enter password">
<input type="email" placeholder="Enter email">
<input type="number" min="1" max="100">
<input type="date">
<input type="file">
<input type="checkbox" id="check" name="check">
<label for="check"> I agree</label>
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
<input type="range" min="0" max="100">
```

### **Dropdown and Multi-line Input**
```html
<select>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
</select>

<textarea rows="4" cols="50">Write your text here...</textarea>
```

### **Grouping Fields & Form Validation**
```html
<fieldset>
    <legend>Personal Info</legend>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" pattern="[0-9]{10}" required>
</fieldset>
```

---

##  ✅**Tables**

### **Creating a Table**
```html
<table border="1">
    <caption>Student Marks</caption>
    <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Marks</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Math</td>
        <td>90</td>
    </tr>
    <tr>
        <td>Emma</td>
        <td>Science</td>
        <td>95</td>
    </tr>
</table>
```

### **Merging Cells**
```html
<table border="1">
    <tr>
        <th colspan="2">Merged Header</th>
    </tr>
    <tr>
        <td rowspan="2">Row Span</td>
        <td>Data 1</td>
    </tr>
    <tr>
        <td>Data 2</td>
    </tr>
</table>
```

---

## ✅**Lists**

### **Ordered & Unordered Lists**
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ol>

<ul>
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ul>
```

### **Description List**
```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
```

### **Nesting Lists**
```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
</ul>
```

---

## **Links & Images**

### **Creating Links**
```html
<a href="https://www.example.com">Visit Example</a>
<a href="https://www.google.com" target="_blank">Open Google in New Tab</a>
<a href="mailto:someone@example.com">Send Email</a>
<a href="tel:+1234567890">Call Now</a>
```

### **Images**
```html
<img src="image.jpg" alt="Image Description" width="300" height="200">
```

### **Lazy Loading Images**
```html
<img src="large-image.jpg" alt="Lazy Loaded Image" loading="lazy">
```

### **Image Maps (Clickable Areas in Images)**
```html
<img src="image-map.jpg" usemap="#workmap">
<map name="workmap">
    <area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example">
</map>
```

---

## **Conclusion**
- Forms help collect user input.
- Tables organize data in rows and columns.
- Lists structure information in ordered/unordered formats.
- Links and images enhance webpage navigation and content.

