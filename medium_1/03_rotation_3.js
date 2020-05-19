/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */

// solution from previous exercise
rotateRightmostDigits = (num, digit) => {
  const arr = String(num).split('') 
  const nonDigitArr = arr.slice(0, -digit) 
  const digitArr = arr.slice(-digit) 
  const finalArr = nonDigitArr.concat(digitArr.slice(1).concat(digitArr.slice(0, 1))) 
  return Number(finalArr.join(''))
}

// new solution
maxRotation = num => {
  let digit = String(num).length // find maximum digit of number
  for (let i = digit; i > 0; i--) { num = rotateRightmostDigits(num, i) } // rotate each digit from left to right
  return num // return new number
}


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845