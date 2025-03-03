
✅ **Navbar**  
✅ **Hero Section** (Text on one side, Image on the other)  
✅ **Footer**  
✅ **Responsive Design (Mobile-Friendly)**  

---

### **📂 File Structure**
```
/project-folder
│── index.html
│── styles.css
```

---

### **1️⃣ index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Web Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- ✅ Navbar -->
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="menu-icon">&#9776;</div>
    </nav>

    <!-- ✅ Hero Section -->
    <section class="hero">
        <div class="hero-text">
            <h1>Welcome to My Website</h1>
            <p>This is a simple, fully responsive webpage using HTML & CSS.</p>
            <button>Get Started</button>
        </div>
        <div class="hero-image">
            <img src="https://via.placeholder.com/500" alt="Hero Image">
        </div>
    </section>

    <!-- ✅ Footer -->
    <footer class="footer">
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

### **2️⃣ styles.css (Basic Styles & Responsive Design)**
```css
/* ✅ Reset Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* ✅ Navbar Styles */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #333;
    color: white;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #ffcc00;
}

.menu-icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

/* ✅ Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    max-width: 1100px;
    margin: auto;
}

.hero-text {
    flex: 1;
    padding: 20px;
}

.hero-text h1 {
    font-size: 36px;
}

.hero-text p {
    margin: 15px 0;
    font-size: 18px;
    color: #555;
}

.hero-text button {
    padding: 10px 20px;
    font-size: 16px;
    background: #ffcc00;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.hero-text button:hover {
    background: #e6b800;
}

.hero-image {
    flex: 1;
    text-align: center;
}

.hero-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
}

/* ✅ Footer */
.footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: white;
    margin-top: 50px;
}

/* ✅ Responsive Design */
@media (max-width: 768px) {
    /* Navbar - Show Menu Icon */
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #333;
        text-align: center;
    }

    .nav-links li {
        padding: 10px;
    }

    .menu-icon {
        display: block;
    }

    /* Hero Section - Stack Items */
    .hero {
        flex-direction: column;
        text-align: center;
    }

    .hero-text, .hero-image {
        flex: none;
        width: 100%;
    }
}
```

---

### **📌 Explanation of Responsive Features**
1. **Navbar:**  
   ✅ On desktop, it displays links.  
   ✅ On mobile, links hide and show with a **menu icon** (JS can be added for toggle).  

2. **Hero Section:**  
   ✅ **Desktop:** Text & Image side-by-side.  
   ✅ **Tablet/Mobile:** Stacks vertically.  

3. **Footer:**  
   ✅ Simple and centered for all devices.  

---

### **🎯 How to Run This?**
1. Save both files (`index.html` & `styles.css`) in the same folder.  
2. Open `index.html` in a browser.  
3. Resize the screen to see responsiveness in action!  

