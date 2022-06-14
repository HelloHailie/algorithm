const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const jae = input[0];
const doc = input[1];

if (jae.length < doc.length) {
  console.log('no');
} else {
  console.log('go');
}
