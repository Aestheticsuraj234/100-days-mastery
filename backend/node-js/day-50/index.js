const os = require('os');
    
console.log(os.type())

console.log(os.platform())

console.log(os.arch())

console.log(os.cpus().length)

console.log(`Total Memory: ${os.totalmem()}`);
console.log(`Free Memory: ${os.freemem()}`);
console.log(os.userInfo());