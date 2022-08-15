const [a, b, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

let sum = 0;
for (let i = 0; i < Number(b) * 2; i++) {
  if (i % 2 === 0) {
    sum += arr[i] * arr[i + 1];
  }
}

if (sum === Number(a)) {
  console.log("Yes");
} else {
  console.log("No");
}