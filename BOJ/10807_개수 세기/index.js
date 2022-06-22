const [a, b, c] = require('fs').readFileSync('test.txt').toString().split('\n');
const result = b.split(' ').join('').trim();

// // 반복문으로 b를 a만큼 돌려서 같은 문자열 만나면 count++ 하기!
const numA = Number(a);
let count = 0;
for (let i = 0; i < numA; i++) {
  if (c === result[i]) {
    count++;
  }
}
console.log(count);
