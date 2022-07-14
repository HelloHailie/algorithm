const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (input[0] > 2) console.log("After");
if (input[0] < 2) console.log("Before");
if (input[0] === 2 && input[1] === 18) console.log("Special");
if (input[0] === 2 && input[1] < 18) console.log("Before");
if (input[0] === 2 && input[1] > 18) console.log("After");