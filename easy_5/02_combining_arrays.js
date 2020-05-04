/* Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. 
There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays. */

union = (arr1, arr2) => {
  const newArr = []
  const arr3 = arr1.concat(arr2)
  arr3.forEach(num => { if (!newArr.includes(num)) newArr.push(num) })
  return newArr
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]