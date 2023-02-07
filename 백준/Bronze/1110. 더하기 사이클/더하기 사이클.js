const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);
let i = 0;
while (true) {
  let nextNum = parseInt(num / 10) + (num % 10);
  num = (num % 10) * 10 + (nextNum % 10);
  i++;
  if (num === Number(input)) {
    break;
  }
}
console.log(i);