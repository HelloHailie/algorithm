const [A] = require('fs').readFileSync('test.txt').toString().split('\n');

//반복문으로 A만큼 별찍기

let sum = '';
for (let i = 0; i < A; i++) {
  sum += '*';
  console.log(sum);
}
