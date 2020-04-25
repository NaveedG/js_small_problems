/* In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). 
You may, however, use integerToString() from the previous exercise. */


// solution from previous exercise
integerToString = num => {
  let obj = { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9' }
  let str = ''
  if (num === 0)
    str = obj[num]
  else {
    let ones
    while (num > 0) {
      ones = num % 10
      str = obj[ones] + str
      num = Math.floor(num / 10)
    }
  }
  return str
}

// new solution
signedIntegerToString = num => {
  if (num === 0)
    return integerToString(num)
  else if (num > 0)
    return '+' + integerToString(num)
  else
    return '-' + integerToString(num * -1)
}

console.log(signedIntegerToString(4321) === "+4321"); // true
console.log(signedIntegerToString(-123) === "-123"); // true
console.log(signedIntegerToString(0) === "0"); // true