const fs = require("fs");
const [a, b] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(a * b);

// 뒤에 .map(Number)라고 쓰면 더 깔끔해진다!
