const input = require('fs').readFileSync('test.txt').toString();

const cal = input * 0.2 * 0.22;
console.log(`${input * 0.78} ${input - cal}`);
