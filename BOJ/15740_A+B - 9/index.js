const fs = require("fs");
const [a, b] = fs.readFileSync("test.txt").toString().trim().split(" ");

const bigA = BigInt(a);
const bigB = BigInt(b);

console.log(bigA + bigB);
// 40점 맞은 코드

const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const bigA = BigInt(a);
const bigB = BigInt(b);

console.log((bigA + bigB).toString());

// 100점 맞은 코드
