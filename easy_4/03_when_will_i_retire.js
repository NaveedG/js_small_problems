/* Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */

const readlineSync = require('readline-sync')

// retrieve current and retirement ages from user
console.log('What is your age?')
const currentAge = Number(readlineSync.prompt())

console.log('At what age would you like to retire?')
const retirementAge = Number(readlineSync.prompt())

// calculate and log current year, retirement year and number of years left until retirement
const today = new Date
const currentYear = today.getFullYear()
const remainingYears = retirementAge - currentAge

console.log(`It's ${currentYear}. You will retire in ${currentYear + remainingYears}.`)
console.log(`You have only ${remainingYears} years of work to go!`)