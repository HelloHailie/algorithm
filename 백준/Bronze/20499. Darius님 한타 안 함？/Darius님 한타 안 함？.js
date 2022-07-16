const fs = require("fs");
const [K, D, A] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("/")
  .map(Number);

if (K + A < D || D === 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}