/* Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading + or - sign; 
if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. 
If no sign is given, you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). 
You may, however, use the stringToInteger() function from the previous lesson. */

// solution from previous exercise
stringToInteger = str => {
  let total = 0
  let multiple = 1
  for (i = (str.length - 1); i >= 0; i--) {
    total += str[i] * multiple
    multiple *= 10
  }
  return total
}

// new solution
stringToSignedInteger = str => {
  if (str[0] === '-')
    return -stringToInteger(str.substring(1))
  else if (str[0] === '+')
    return stringToInteger(str.substring(1))
  else
    return stringToInteger(str)
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true