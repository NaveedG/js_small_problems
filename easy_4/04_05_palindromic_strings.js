/* Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter. */

isPalindrome = str => {
  const reverse = str.split('').reverse().join('')
  return (str === reverse) ? true : false
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

/* Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. 
If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise. */

isRealPalindrome = str => {
  const newStr = str.toLowerCase().replace(/[^a-z0-9]/gmi, '')
  return isPalindrome(newStr)
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false