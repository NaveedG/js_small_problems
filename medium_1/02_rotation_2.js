/* Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left. */

rotateRightmostDigits = (num, digit) => {
  const arr = String(num).split('') // convert original number into an array
  const nonDigitArr = arr.slice(0, -digit) // separate non-digit-relevant part of array
  const digitArr = arr.slice(-digit) // separate digit-relevant part of array
  const finalArr = nonDigitArr.concat(digitArr.slice(1).concat(digitArr.slice(0, 1))) // rotate and concatenate digit-relevant array
  return Number(finalArr.join('')) // convert the recombined array into a number
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917