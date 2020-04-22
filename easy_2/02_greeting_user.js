/* Write a program that will ask for a user's name. The program will then greet the user. 
If the user writes "name!" then the computer yells back to the user.

Examples:
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING? */

const readlineSync = require('readline-sync')

// ask for user's name
console.log('What is your name?')
const name = readlineSync.prompt()

// greet user in caps unless name lacks !
  if (name.charAt(name.length - 1) === '!')
    console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE YOU SCREAMING?`)
  else
    console.log(`Hello ${name}.`)
