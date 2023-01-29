const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();

for (let k of input) {
  let answer = "";
  const reversed = k.split("").reverse().join("");
  if (k === reversed) {
    answer = "yes";
  } else {
    answer = "no";
  }
  console.log(answer);
}