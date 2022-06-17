const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
console.log(a);
console.log(b);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
