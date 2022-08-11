const fs = require("fs");
const [payment] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let change = 1000 - payment;
let count = 0;
const changeCoin = [500, 100, 50, 10, 5, 1];

for (let i = 0; i < changeCoin.length; i++) {
  if (change === 0) break;
  count += Math.floor(change / changeCoin[i]);
  change %= changeCoin[i];
}
console.log(count);