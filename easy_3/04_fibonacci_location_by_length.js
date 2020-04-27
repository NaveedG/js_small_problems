/* Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2. */

findFibonacciIndexByLength = num => {
  let arr = [1]
  let newFib = 1
  while (newFib.toString().length !== num) {
    arr.push(newFib)
    newFib = arr[arr.length - 2] + arr[arr.length -1]
  }
  return (arr.length + 1)
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74