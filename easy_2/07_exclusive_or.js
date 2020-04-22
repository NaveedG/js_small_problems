// Write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.

xor = (x, y) => ((x && y) || !(x || y)) ? false : true

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true

