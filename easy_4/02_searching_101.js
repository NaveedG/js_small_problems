/* Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.

Examples:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. */

const readlineSync = require('readline-sync')
let arr = [] // declare and assign variable to an empty array

// retrieve all numbers from user and push first five numbers into array
console.log('Enter the 1st number:')
const first = readlineSync.prompt()
arr.push(first)

console.log('Enter the 2nd number:')
const second = readlineSync.prompt()
arr.push(second)

console.log('Enter the 3rd number:')
const third = readlineSync.prompt()
arr.push(third)

console.log('Enter the 4th number:')
const fourth = readlineSync.prompt()
arr.push(fourth)

console.log('Enter the 5th number:')
const fifth = readlineSync.prompt()
arr.push(fifth)

console.log('Enter the last number:')
const last = readlineSync.prompt()

// check if array includes last number and log result to user
if (arr.includes(last))
  console.log(`The number ${last} appears in ${first},${second},${third},${fourth},${fifth}.`)
else
  console.log(`The number ${last} does not appear in ${first},${second},${third},${fourth},${fifth}.`)

