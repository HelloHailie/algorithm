const fs = require("fs");
let [month, date] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let DayOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let result = new Date(`2007-${month}-${date}`);
console.log(DayOfTheWeek[result.getDay()]);
