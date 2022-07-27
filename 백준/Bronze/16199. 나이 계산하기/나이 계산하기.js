const fs = require("fs");
const [birth, standard] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const birthYear = birth.split(" ").map(Number)[0];
const birthMonth = birth.split(" ").map(Number)[1];
const birthDate = birth.split(" ").map(Number)[2];

const stdYear = standard.split(" ").map(Number)[0];
const stdMonth = standard.split(" ").map(Number)[1];
const stdDate = standard.split(" ").map(Number)[2];

let a, b, c;

const y = stdYear - birthYear;
const m = stdMonth - birthMonth;

if (m < 0 || (m === 0 && stdDate < birthDate)) {
  a = y - 1;
} else {
  a = y;
}
console.log(a);
b = y + 1;
console.log(b);
c = y;
console.log(c);
