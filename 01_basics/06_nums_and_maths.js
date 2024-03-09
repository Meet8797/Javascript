const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const anotherNumber = 256.987

// console.log(anotherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(8.4));
// console.log(Math.ceil(9.3));  // returns maximum rounded off value
// console.log(Math.floor(8.6)); // returns min rounded value

console.log(Math.random());
console.log((Math.random() *10) + 1 );

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min +1 )) + min)