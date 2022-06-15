const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim();

console.log(Number(input[0]) + Number(input[2]));
