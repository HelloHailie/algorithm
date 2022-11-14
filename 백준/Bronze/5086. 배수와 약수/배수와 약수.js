const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let x of input) {
  const value = x.split(" ").map(Number);
  //console.log(value[0], value[1]);

  if (value[0] === 0 || value[1] === 0) continue;
  else if (value[1] % value[0] === 0) console.log("factor");
  else if (value[0] % value[1] === 0) console.log("multiple");
  else console.log("neither");
}