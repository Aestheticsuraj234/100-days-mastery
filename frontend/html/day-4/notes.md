## **Forms (Advanced)**  

### 1️⃣ Hidden Inputs (`<input type="hidden">`)  
Hidden inputs store data that is not visible to the user but can be sent with a form submission.  

🔹 **Example:**  
```html
<form action="/submit">
  <input type="hidden" name="userID" value="12345">
  <input type="text" name="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
```

---

### 2️⃣ Autofocus and Autocomplete in Forms  
- **Autofocus**: Automatically focuses on an input field when the page loads.  
- **Autocomplete**: Suggests previously entered values to the user.  

🔹 **Example:**  
```html
<form>
  <input type="text" name="username" placeholder="Username" autofocus autocomplete="username">
  <input type="email" name="email" placeholder="Email" autocomplete="email">
  <button type="submit">Login</button>
</form>
```

---

### 3️⃣ Disabling Inputs (`disabled` attribute)  
- A disabled input field cannot be edited or submitted.  

🔹 **Example:**  
```html
<form>
  <input type="text" value="Readonly Data" disabled>
  <button type="submit">Submit</button>
</form>
```

---

### 4️⃣ Readonly Fields (`readonly` attribute)  
- Read-only fields can be seen but not edited by users.  

🔹 **Example:**  
```html
<form>
  <input type="text" value="This is readonly" readonly>
</form>
```

---

## **Special Elements**  

### 1️⃣ `<details>` and `<summary>` (Collapsible Content)  
- Used to create expandable/collapsible sections.  

🔹 **Example:**  
```html
<details>
  <summary>Click to expand</summary>
  <p>This is hidden content until expanded.</p>
</details>
```

---

### 2️⃣ `<progress>` (Progress Bar)  
- Displays progress of a task.  

🔹 **Example:**  
```html
<progress value="70" max="100"></progress>
```

---

### 3️⃣ `<meter>` (Measurement Display)  
- Represents a value within a known range (e.g., battery level).  

🔹 **Example:**  
```html
<meter value="75" min="0" max="100">75%</meter>
```

---

### 4️⃣ `<dialog>` (Native Modal Dialogs)  
- Creates a popup/modal without JavaScript.  

🔹 **Example:**  
```html
<dialog id="myDialog">
  <p>This is a modal dialog.</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>
<button onclick="document.getElementById('myDialog').showModal()">Open Dialog</button>
```

---

## **Best Practices in HTML Development**  

### ✅ Writing Clean and Readable HTML  
- Use **proper indentation** and **meaningful element names**.  

### ✅ Properly Nesting Elements  
- Ensure that all **opening and closing tags** are correctly placed.  

🔹 **Example:**  
```html
<div>
  <p>This is properly nested.</p>
</div>
```

---

### ✅ Using Comments in HTML (`<!-- Comment -->`)  
- Helps document your code for readability.  

🔹 **Example:**  
```html
<!-- This is a comment -->
<p>Hello, world!</p>
```

---

### ✅ Mobile-Friendly HTML Best Practices  
- Use **responsive elements** like `<meta viewport>` and **flexible layouts**.  

🔹 **Example:**  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

