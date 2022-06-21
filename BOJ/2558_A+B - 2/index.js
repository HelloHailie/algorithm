const fs = require('fs');
const [a, b] = require('fs').readFileSync('test.txt').toString().split('\n');

console.log(Number(a) + Number(b));
