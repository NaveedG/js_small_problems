/* Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places. */

multiplicativeAverage = arr => {
  const product = arr.reduce((acc, cur) => acc * cur)
  return roundToThree((product / arr.length)).toFixed(3)
}

roundToThree = num => +(Math.round(num + 'e+3') + 'e-3')

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"