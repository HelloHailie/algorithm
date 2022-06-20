const [A, B] = require('fs').readFileSync('test.txt').toString().split(' ');

console.log(Math.abs(A - B));
