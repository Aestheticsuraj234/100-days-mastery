# 🛣️ Node.js `path` Module - Notes

## 📌 Overview
The `path` module in Node.js provides **utilities for working with file and directory paths**. It's a core module, so **no installation** is needed.

```js
const path = require('path');
```

It handles paths **independent of the operating system**, so it's useful for writing cross-platform Node apps.

---

## 🧱 Common Methods

### 1. `path.basename(path, [ext])`
Returns the **last portion** of a path (i.e., the file name).

```js
path.basename('/foo/bar/baz.html'); // 'baz.html'
path.basename('/foo/bar/baz.html', '.html'); // 'baz'
```

---

### 2. `path.dirname(path)`
Returns the **directory** name of a path.

```js
path.dirname('/foo/bar/baz.html'); // '/foo/bar'
```

---

### 3. `path.extname(path)`
Returns the **file extension** of the path.

```js
path.extname('index.html'); // '.html'
```

---

### 4. `path.join([...paths])`
Joins all given path segments together, using the correct separator.

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'); 
// '/foo/bar/baz/asdf'
```

Automatically resolves `..` and `.`.

---

### 5. `path.resolve([...paths])`
Resolves a sequence of paths into an **absolute path**.

```js
path.resolve('foo/bar', '/tmp/file/', '..', 'a.txt');
// '/tmp/a.txt'
```

> Starts from **right to left**, prepends the current working directory if necessary.

---

### 6. `path.parse(path)`
Returns an object with root, dir, base, ext, and name.

```js
path.parse('/home/user/file.txt');
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

---

### 7. `path.format(pathObject)`
Opposite of `path.parse()`. Builds a path string from an object.

```js
path.format({
  dir: '/home/user',
  name: 'file',
  ext: '.txt'
});
// '/home/user/file.txt'
```

---

### 8. `path.isAbsolute(path)`
Checks if the given path is an **absolute** path.

```js
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('foo/bar');  // false
```

---

### 9. `path.relative(from, to)`
Gives the **relative path** from one location to another.

```js
path.relative('/data/user/docs', '/data/user/photos');
// '../photos'
```

---

## 🔁 Platform Differences

- On **Windows**, path separator is `\`
- On **POSIX** (Linux/macOS), it’s `/`

To get the platform-specific separator or delimiter:

```js
path.sep;      // '\' or '/'
path.delimiter; // ';' or ':'
```

---

## 📦 Extra Utilities

### `path.normalize(path)`
Normalizes the given path, resolving `..` and `.` segments.

```js
path.normalize('/foo/bar//baz/asdf/..');
// '/foo/bar/baz'
```

---

## 💡 Best Practices
- Always use `path.join()` or `path.resolve()` when constructing paths.
- Avoid hardcoding separators (`/` or `\`), use `path.sep` or utilities instead.
- Prefer `resolve()` when you need **absolute paths** and `join()` for general construction.

---

## ✅ Real-World Example

```js
const path = require('path');

const filePath = path.join(__dirname, 'files', 'example.txt');
console.log('Full Path:', filePath);
console.log('Base Name:', path.basename(filePath));
console.log('Directory:', path.dirname(filePath));
console.log('Extension:', path.extname(filePath));
```

