/* Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string.
 The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace. */

 doubleConsonants = str => {
   let newStr = ''
   const consonants = 'bcdfghjklmnpqrstvwxyz'
   for (let i = 0; i < str.length; i++) {
    if (consonants.split('').includes(str[i].toLowerCase()))
      newStr += str[i] + str[i]
    else
      newStr += str[i]
   }
   return newStr
 }

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""