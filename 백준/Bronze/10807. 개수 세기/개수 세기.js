const fs = require("fs");
let [leng, arr, v] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

arr = arr.split(" ").map(Number);

let result = arr.filter((e) => e === Number(v));
console.log(result.length);