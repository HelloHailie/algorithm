const fs = require("fs");
const [a, b, ...arr] = fs
  .readFileSync("test.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

console.log(a);
console.log(b);

console.log(arr);

let result = "";
for (let i = 0; i < a; i++) {
  if (arr[i] < b) {
    result += arr[i] + " ";
  }
}

console.log(result);
