## 📁 `os` Module in Node.js

The `os` module provides operating system-related utility methods and properties.

### 🔹 Importing the module
```js
const os = require('os');
```

### 🔹 Common Methods & Examples

#### 1. **os.type()** – Returns the OS name
```js
console.log(os.type()); // 'Linux', 'Darwin' (macOS), or 'Windows_NT'
```

#### 2. **os.platform()** – Platform of the OS
```js
console.log(os.platform()); // 'win32', 'linux', 'darwin'
```

#### 3. **os.arch()** – CPU architecture
```js
console.log(os.arch()); // 'x64', 'arm', etc.
```

#### 4. **os.cpus()** – Info about each CPU/core
```js
console.log(os.cpus()); // Array of CPU info
```

#### 5. **os.totalmem() & os.freemem()** – Memory details (in bytes)
```js
console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);
```

#### 6. **os.uptime()** – System uptime in seconds
```js
console.log(`System Uptime: ${os.uptime()} seconds`);
```

#### 7. **os.userInfo()** – Current user information
```js
console.log(os.userInfo());
```

---

## 📂 `fs` Module in Node.js

The `fs` (File System) module allows you to interact with the file system.

### 🔹 Importing the module
```js
const fs = require('fs');
```

You can use **synchronous** (`fs.readFileSync`) or **asynchronous** (`fs.readFile`) methods.

---

### 🔸 Reading Files

#### 1. **Asynchronous**
```js
fs.readFile('example.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### 2. **Synchronous**
```js
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);
```

---

### 🔸 Writing Files

#### 3. **fs.writeFile (async)**
```js
fs.writeFile('newfile.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File created!');
});
```

#### 4. **fs.appendFile**
```js
fs.appendFile('newfile.txt', '\nAppended content.', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
```

---

### 🔸 Deleting Files

#### 5. **fs.unlink**
```js
fs.unlink('newfile.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

---

### 🔸 Creating & Removing Folders

#### 6. **fs.mkdir**
```js
fs.mkdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});
```

#### 7. **fs.rmdir**
```js
fs.rmdir('myFolder', (err) => {
  if (err) throw err;
  console.log('Folder removed!');
});
```

---

### 🔸 Checking if a file/folder exists

#### 8. **fs.existsSync**
```js
if (fs.existsSync('example.txt')) {
  console.log('File exists!');
}
```

---

### 🔸 Reading a directory

#### 9. **fs.readdir**
```js
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files); // Lists files in current directory
});
```

---

### 🔸 File Stats

#### 10. **fs.stat**
```js
fs.stat('example.txt', (err, stats) => {
  if (err) throw err;
  console.log(stats); // includes size, created date, etc.
});
```

---

### ✅ Summary Table

| Task                    | Method                    |
|-------------------------|---------------------------|
| Read file               | `fs.readFile`, `fs.readFileSync` |
| Write file              | `fs.writeFile`, `fs.writeFileSync` |
| Append to file          | `fs.appendFile`           |
| Delete file             | `fs.unlink`               |
| Create directory        | `fs.mkdir`                |
| Remove directory        | `fs.rmdir`                |
| Check file/folder exists| `fs.existsSync`           |
| Read directory content  | `fs.readdir`              |
| Get file stats          | `fs.stat`                 |

