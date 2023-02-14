const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const number = Number(input);

function fibo(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[num];
}

console.log(fibo(number));