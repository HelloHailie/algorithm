const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim();

let arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const alpha = input.charCodeAt(i) - 97;
  arr[alpha]++;
}

console.log(arr.join(" "));
