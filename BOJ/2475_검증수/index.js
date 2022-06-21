// const [a, b, c, d, e] = require('fs')
//   .readFileSync('test.txt')
//   .toString()
//   .split(' ');

// console.log((a * a + b * b + c * c + d * d + e * e) % 10);

// 리팩토링

const input = require('fs').readFileSync('test.txt').toString().split(' ');

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i] * input[i];
}

console.log(sum % 10);
