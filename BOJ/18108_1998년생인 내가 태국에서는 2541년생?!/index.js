const fs = require('fs');
const input = Number(fs.readFileSync('test.txt').toString());

console.log(input - 543);
