const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

// let num =
let result = [];

for (let i = 0; i < input.length; i++) {
  let count = 0;
  for (let j = 0; j < input.length; j++) {
    if (i !== j) {
      if (
        input[i].split(" ").map(Number)[0] <
          input[j].split(" ").map(Number)[0] &&
        input[i].split(" ").map(Number)[1] < input[j].split(" ").map(Number)[1]
      ) {
        count++;
      }
    }
  }
  result.push(count + 1);
}

console.log(result.join(" "));