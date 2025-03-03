# Media Queries & Responsive Layout Techniques

## 1. Basics of Media Queries
Media queries allow you to apply different CSS styles based on the device's screen size, resolution, or other properties.

### Syntax:
```css
@media (condition) {
  /* CSS rules */
}
```
Example:
```css
body {
  background: white;
}

@media (max-width: 768px) {
  body {
    background: lightgray;
  }
}
```
✅ This code changes the background color when the screen width is **768px or smaller**.

---
## 2. Breakpoints
Breakpoints are screen widths where your layout needs to change to fit different devices.

### Common Breakpoints:
| Device             | Min Width | Max Width |
|----------------|-----------|----------|
| Mobile Phones   | 320px    | 480px    |
| Tablets        | 481px    | 768px    |
| Laptops       | 769px    | 1024px   |
| Desktops      | 1025px   | 1200px   |
| Large Screens  | 1201px   | 1440px+  |

### How to Use Breakpoints:
- `min-width`: Style applies **above** the given width.
- `max-width`: Style applies **below** the given width.

Example:
```css
/* Mobile View */
@media (max-width: 480px) {
  p {
    font-size: 14px;
  }
}

/* Tablet View */
@media (min-width: 481px) and (max-width: 768px) {
  p {
    font-size: 18px;
  }
}
```
---
## 3. Mobile-First vs Desktop-First Approach
### Mobile-First Approach ✅ (Recommended)
Start designing for smaller screens first, then add styles for larger screens using `min-width`.

Example:
```css
p {
  font-size: 14px; /* Mobile Default */
}

@media (min-width: 768px) {
  p {
    font-size: 18px; /* Tablet */
  }
}
```

### Desktop-First Approach ❌ (Old Method)
Start designing for larger screens, then adjust for smaller screens using `max-width`.

Example:
```css
p {
  font-size: 18px; /* Desktop Default */
}

@media (max-width: 768px) {
  p {
    font-size: 14px; /* Mobile */
  }
}
```
---
## 4. Responsive Layout Techniques
### ✅ Best Techniques:
- **Flexbox** → For flexible layouts.
- **CSS Grid** → For grid-based layouts.
- **Percentage Widths** → Use `%` instead of fixed pixels.
- **Viewport Units** → `vw`, `vh` for dynamic sizing.
- **REM & EM Units** → Relative font sizes.

Example with Flexbox:
```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.container div {
  flex: 1 1 300px; /* Flexible boxes */
  margin: 10px;
}
```
### Bonus Tip 💪
Always test your design on **multiple devices** and use browser DevTools for testing responsiveness.


