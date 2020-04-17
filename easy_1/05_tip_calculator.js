/* Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will enter numbers. */

let readlineSync = require('readline-sync');

// retrieve bill amount input from user
console.log('What is the bill?')
let bill = Number(readlineSync.prompt())

// retrieve tip rate input from user
console.log('What is the tip percentage?')
let tipRate = Number(readlineSync.prompt())

// compute and log tip along with total amount of the bill
let tip = bill * (tipRate / 100)
let total = bill + tip
console.log(`The tip is ${tip.toFixed(2)} and the total is ${total.toFixed(2)}.`)