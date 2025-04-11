// const path = require('path');

// console.log(path.basename("/user/home/index.html"));
// console.log(path.dirname("/user/home/index.html"));

// console.log(path.extname("/user/home/index.js"));


// console.log(path.join("/foo" , "bar" , "baz/asdf" , "quux" , ".."))

// console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a.txt'));

// console.log(path.parse("/home/user/file.txt"))


const path = require('path');

const filePath = path.join(__dirname, 'files', 'example.txt');
console.log('Full Path:', filePath);
console.log('Base Name:', path.basename(filePath));
console.log('Directory:', path.dirname(filePath));
console.log('Extension:', path.extname(filePath));