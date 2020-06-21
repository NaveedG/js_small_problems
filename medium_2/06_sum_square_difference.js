/* Write a function that computes the difference between the square of the sum of the first count positive integers 
and the sum of the squares of the first count positive integers. */

sumSquareDifference = num => {
  const sumSquare = runningTotal(num) ** 2
  const squareSum = runningTotalSq(num)
  return sumSquare - squareSum
}

runningTotal = num => {
  let total = 0
  for (let i = 0; i <= num; i++) total += i
  return total
}

runningTotalSq = num => {
  let total = 0
  for (let i = 0; i <= num; i++) total += (i ** 2)
  return total
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
