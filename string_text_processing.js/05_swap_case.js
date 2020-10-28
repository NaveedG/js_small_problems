/* Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
Leave all other characters unchanged. */

swapCase = str => {
  const arr = str.split('').map(char => {
    if (char === char.toUpperCase()) {
      char = char.toLowerCase()
    } else {
      char = char.toUpperCase()
    }
    return char
  })
  return arr.join('')
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
