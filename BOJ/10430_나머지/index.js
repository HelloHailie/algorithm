const fs = require("fs");
const [A, B, C] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
