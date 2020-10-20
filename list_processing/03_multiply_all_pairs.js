/* Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array. */

multiplyAllPairs = (arr1, arr2) => {
  const newArr = []
  for (let num of arr1) arr2.forEach(val => newArr.push(num * val))
  return newArr.sort((x, y) => x - y)
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
