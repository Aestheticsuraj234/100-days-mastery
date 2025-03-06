# 🎨 CSS Animations Notes  

CSS animations allow elements to transition between different states smoothly. The key properties involved in animations are:

## ✨ **1. Key Properties in Your Code**
### 1️⃣ `animation-name`
- Defines the name of the `@keyframes` animation to apply.
- Example:
  ```css
  animation-name: fadeIn;
  ```

### 2️⃣ `animation-duration`
- Specifies how long the animation should take to complete one cycle.
- Example:
  ```css
  animation-duration: 2s; /* Runs for 2 seconds */
  ```

### 3️⃣ `animation-timing-function`
- Controls the speed curve of the animation.
- Common values:
  - `ease` (default) - Starts slow, then fast, then slow.
  - `linear` - Moves at a constant speed.
  - `ease-in` - Starts slow.
  - `ease-out` - Ends slow.
  - `ease-in-out` - Starts and ends slow.
  - `cubic-bezier(x, y, z, w)` - Custom speed curve.
- Example:
  ```css
  animation-timing-function: ease-in-out;
  ```

### 4️⃣ `animation-delay`
- Delays the animation start time.
- Example:
  ```css
  animation-delay: 1s; /* Starts after 1 second */
  ```

### 5️⃣ `animation-iteration-count`
- Defines how many times the animation should run.
- Values:
  - `infinite` - Runs forever.
  - Any number - Runs for that many times.
- Example:
  ```css
  animation-iteration-count: infinite;
  ```

### 6️⃣ `animation-direction`
- Controls if the animation runs forward, backward, or alternates.
- Values:
  - `normal` - Runs forward (default).
  - `reverse` - Runs backward.
  - `alternate` - Runs forward, then backward.
  - `alternate-reverse` - Runs backward, then forward.
- Example:
  ```css
  animation-direction: alternate;
  ```

### 7️⃣ `animation-play-state`
- Specifies whether the animation is **running** or **paused**.
- Values:
  - `running` - The animation plays normally.
  - `paused` - The animation is paused.
- Example:
  ```css
  animation-play-state: paused;
  ```

### 8️⃣ `animation-fill-mode`
- Defines how the element should appear before/after the animation.
- Values:
  - `none` - No styles applied before or after animation.
  - `forwards` - Retains the last keyframe's style.
  - `backwards` - Applies the first keyframe’s style before animation starts.
  - `both` - Applies both `forwards` and `backwards`.
- Example:
  ```css
  animation-fill-mode: forwards;
  ```

---

# 🚀 **2. Combining Multiple Animations**
In your code, you used **two animations** together:
```css
animation: codeWithRandomKaAnimation 2s ease-in-out 3s 1, 
           codeWithRandom2 3s ease-in-out 3s 1;
```
This means:
1. `codeWithRandomKaAnimation`:
   - Runs for **2s**
   - Uses `ease-in-out` timing
   - Starts after **3s**
   - Runs **once**
  
2. `codeWithRandom2`:
   - Runs for **3s**
   - Uses `ease-in-out` timing
   - Starts after **3s**
   - Runs **once**

---

# 🎬 **3. Defining Keyframes**
CSS animations work using `@keyframes`, which defines how styles change over time.

### 📌 Example: Background Color Change
Your code:
```css
@keyframes codeWithRandomKaAnimation {
    from {
        background-color: red;
    }
    to {
        background-color: yellow;
    }
}
```
This means:
- The element starts with **red** and gradually changes to **yellow**.

### 📌 Example: Rotation Animation
Your code:
```css
@keyframes codeWithRandom2 {
    0% { transform: rotate(100deg); }
    20% { transform: rotate(200deg); }
    50% { transform: rotate(220deg); }
    80% { transform: rotate(300deg); }
    100% { transform: rotate(310deg); }
}
```
This rotates the element in steps from **100°** to **310°**.

---

# 🛠 **4. Full Example with Multiple Animations**
### 🔹 Bouncing Box with Rotation
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Example</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: blue;
            position: relative;
            animation: bounce 2s ease-in-out infinite, rotate 2s linear infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-50px); }
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```
**Explanation:**
- `bounce` makes the box move up and down.
- `rotate` makes it spin continuously.

---

# 📝 **5. Short-hand Property**
Instead of writing each property separately, you can use:
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```
Example:
```css
animation: bounce 2s ease-in-out 0s infinite alternate;
```
This means:
- Animation name: `bounce`
- Duration: `2s`
- Timing function: `ease-in-out`
- Delay: `0s`
- Iteration: `infinite`
- Direction: `alternate`

---

# 🎯 **6. Real-World Use Cases**
✅ **Button Hover Effect**
```css
button:hover {
    animation: pulse 1s infinite alternate;
}
@keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.1); }
}
```
✅ **Loading Spinner**
```css
.loader {
    width: 50px;
    height: 50px;
    border: 5px solid gray;
    border-top: 5px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
```

---

# 🎉 **7. Summary**
| Property                 | Description |
|--------------------------|-------------|
| `animation-name`         | Name of the animation. |
| `animation-duration`     | How long the animation lasts. |
| `animation-timing-function` | Speed curve of animation. |
| `animation-delay`        | Wait time before animation starts. |
| `animation-iteration-count` | Number of times animation repeats. |
| `animation-direction`    | Animation flow (normal, reverse, alternate). |
| `animation-play-state`   | `running` or `paused`. |
| `animation-fill-mode`    | Style before/after animation. |
| `@keyframes`            | Defines the animation behavior. |

---

# 🚀 **Final Thoughts**
- CSS animations make websites more **interactive and engaging**.
- You can animate **backgrounds, text, images, and even UI elements**.
- Using **multiple animations together** creates more dynamic effects.
