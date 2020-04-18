/* Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

let readlineSync = require('readline-sync');

// retrieve integer from user
console.log('Please enter an integer greater than 0:')
let num = Number(readlineSync.prompt())

// ask user for either sum or product of all numbers between 1 and the given integer
console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let result = readlineSync.prompt()

// compute and log either sum or product if input is valid
if (result === 's') {
  let total = 0
  for (let i = 1; i <= num; i++) total += i
  console.log(`The sum of the integers between 1 and ${num} is ${total}.`)
} else if (result === 'p') {
  let total = 1
  for (let i = 1; i <= num; i++) total *= i
  console.log(`The product of the integers between 1 and ${num} is ${total}`)
} else
  console.log('Invalid entry!')


