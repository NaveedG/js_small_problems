// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

let readlineSync = require('readline-sync');

// retrieve length input from user
console.log('Enter the length of the room in meters:')
let length = Number(readlineSync.prompt())

// retrieve width input from user
console.log('Enter the width of the room in meters:')
let width = Number(readlineSync.prompt())

// log area of the room in square meters and square feet
let area = length * width
console.log(`The area of the room is ${area.toFixed(2)} square meters (${(area * 10.7639).toFixed(2)} square feet).`)