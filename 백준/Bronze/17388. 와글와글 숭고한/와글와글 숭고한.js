const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const min = Math.min(a, b, c);
if (a + b + c >= 100) console.log("OK");
else if (min === a) console.log("Soongsil");
else if (min === b) console.log("Korea");
else console.log("Hanyang");