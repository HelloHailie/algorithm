const fs = require("fs");
const [a, b] = fs.readFileSync("test.txt").toString().trim().split("\n");

const result = b.split("").map((item) => {
  return parseInt(item, 10);
});

let sum = 0;
for (let i = 0; i < a; i++) {
  sum += result[i];
}

console.log(sum);
