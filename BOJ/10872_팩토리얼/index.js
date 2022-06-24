const fs = require("fs");
const input = fs.readFileSync("test.txt").toString();

// console.log(typeof input);
let numInput = Number(input);

// console.log(typeof numInput);

// 3!
// 3*2*1 = 6
// 3*2!

// 4!
// 4*3*2*1 = 24
// 4*3!
//   3*2!
// n!
// n*n-1*n-2*n-3*...*1

function fac(numInput) {
  if (numInput <= 1) return 1;
  return numInput * fac(numInput - 1);
}

console.log(fac(numInput));

//오늘 배운 재귀함수로 풀었다! 너무 기쁘다!
