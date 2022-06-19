const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

console.log(`${num1 + num2}\n${num1 - num2}\n${num1 * num2}`);
