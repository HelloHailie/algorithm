const today = new Date();

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

console.log(
  `${year}-${month <= 10 ? "0" + month : month}-${
    date <= 10 ? "0" + date : date
  }`
);
