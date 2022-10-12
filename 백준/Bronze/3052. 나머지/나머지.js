let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => Number(el))
	.map((el2) => el2 % 42);
let filterNumber = input.filter((el, idx) => input.indexOf(el) === idx);

console.log(filterNumber.length);