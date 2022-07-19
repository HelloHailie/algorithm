const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);