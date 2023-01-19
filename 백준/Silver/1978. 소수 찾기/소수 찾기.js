const fs = require("fs");
let [leng, newArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

newArr = newArr.split(" ").map((e) => Number(e));

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(newArr.filter((e) => isPrime(e)).length);