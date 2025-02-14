### **Day 1: Introduction to HTML, Structure, Elements, and Text Formatting**

---

#### **What is HTML?**
**HTML** stands for **HyperText Markup Language**. It is the standard language used to create and structure content on the web. HTML uses **tags** to define elements like headings, paragraphs, links, forms, etc.

---

#### **HTML Document Structure**✅
A basic HTML document follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <!-- Page Content Goes Here -->
</body>
</html>
```

- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element of the document.
- `<head>`: Contains metadata like the document title, character set, and viewport settings.
- `<body>`: Contains the visible content of the webpage.

---

#### **Headings (`<h1>` to `<h6>`)**✅
Headings are used to define the importance of content on the page, with `<h1>` being the most important and `<h6>` the least.

```html
<h1>This is a Heading 1</h1>
<h2>This is a Heading 2</h2>
<h3>This is a Heading 3</h3>
<h4>This is a Heading 4</h4>
<h5>This is a Heading 5</h5>
<h6>This is a Heading 6</h6>
```

- `<h1>`: Main heading (used for the page title or most important topic).
- `<h2>` to `<h6>`: Subheadings for structuring content hierarchically.

---

#### **Paragraphs (`<p>`)**
The `<p>` tag is used to define paragraphs.

```html
<p>This is a simple paragraph of text.</p>
```

- Paragraphs help break text into manageable sections for better readability.

---

#### **Text Formatting**

##### **Bold (`<b>`) vs. Strong (`<strong>`)**
- `<b>` is used for bold text, but it doesn't imply any special importance.
- `<strong>` is used for emphasizing text (usually makes it bold in browsers).

```html
<b>This is bold text.</b>
<strong>This is important and bold text.</strong>
```

##### **Italic (`<i>`) vs. Emphasized (`<em>`)**
- `<i>` is used for italic text (stylistic).
- `<em>` is used for emphasizing text (usually italicized in browsers).

```html
<i>This is italic text.</i>
<em>This is emphasized and italicized text.</em>
```

##### **Underline (`<u>`)**
The `<u>` tag is used to underline text.

```html
<u>This is underlined text.</u>
```

##### **Superscript (`<sup>`) and Subscript (`<sub>`)**
- `<sup>` is used for superscript text (e.g., mathematical powers).
- `<sub>` is used for subscript text (e.g., chemical formulas).

```html
<p>H<sub>2</sub>O (Water)</p>
<p>x<sup>2</sup> (Square of x)</p>
```

##### **Highlighting Text (`<mark>`)**
The `<mark>` tag is used to highlight text.

```html
<p>This is <mark>highlighted text</mark> in a paragraph.</p>
```

##### **Strikethrough (`<s>`, `<del>`)**
- `<s>` is used to indicate deleted text (often displayed with a line through it).
- `<del>` is used to mark text that has been deleted or is no longer relevant.

```html
<s>This text is struck through.</s>
<del>This text has been deleted.</del>
```

---

#### **Line Breaks (`<br>`) and Horizontal Rule (`<hr>`)**

- **Line Break (`<br>`)**: Forces a line break in the text.

```html
<p>This is a paragraph.<br>This is a new line within the same paragraph.</p>
```

- **Horizontal Rule (`<hr>`)**: Creates a horizontal line that is used to separate sections of content.

```html
<p>This is the first section.</p>
<hr>
<p>This is the second section.</p>
```

---

#### **Preformatted Text (`<pre>`)**
The `<pre>` tag is used to display text exactly as it is written, including spaces and line breaks.

```html
<pre>
    This is preformatted text.
    It preserves all spacing and line breaks.
</pre>
```

---

#### **Block-level Elements vs. Inline Elements**

- **Block-level elements**: These elements take up the full width available and start on a new line. Examples: `<div>`, `<p>`, `<h1>`, `<ul>`.
- **Inline elements**: These elements only take up as much width as necessary and do not start on a new line. Examples: `<span>`, `<a>`, `<b>`, `<i>`.

```html
<div>This is a block-level element.</div>
<p>This is another block-level element.</p>

<span>This is an inline element.</span>
<a href="#">This is another inline element.</a>
```
