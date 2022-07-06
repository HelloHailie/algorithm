let today = new Date();

const year = today.getUTCFullYear();
let month = today.getUTCMonth() + 1;
let date = today.getUTCDate();

if (month < 10) {
  month = `0${month}`;
}

if (date < 10) {
  date = `0${date}`;
}

console.log(`${year}\n${month}\n${date}`);
