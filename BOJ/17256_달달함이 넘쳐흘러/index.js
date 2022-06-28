const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const aValue = input[0].split(" ").map(Number);
const cValue = input[1].split(" ").map(Number);

let resultNum = "";
const result = `${cValue[0] - aValue[2]} ${cValue[1] / aValue[1]} ${
  cValue[2] - aValue[0]
}`;
console.log(typeof result);

// a 🍰 b = (a.z + b.x, a.y × b.y, a.x + b.z)
// a 🍰 b = c

// 19 32 90 = (17 + b.x, 16 × b.y, 15 + b.z)
//                2         2       75

// 어라 string으로 반환되는데도 정답으로 되네요.
