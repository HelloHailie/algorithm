const [a, b] = require("fs").readFileSync("test.txt").toString().split("\n");

const numA = Number(a);
const numB = Number(b);

// 조건문으로 풀자 (4가지 case)

if (a > 0 && b > 0) {
  console.log(1);
} else if (a < 0 && b > 0) {
  console.log(2);
} else if (a < 0 && b < 0) {
  console.log(3);
} else {
  console.log(4);
}
