/* Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example output:
Teddy is 69 years old! */

getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const age = getRandomInt(20, 120)

console.log(`Teddy is ${age} years old!`)



