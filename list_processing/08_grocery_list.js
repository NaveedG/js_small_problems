/* Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, 
in which each fruit appears a number of times equal to its quantity. */

buyFruit = arr => {
  const newArr = []
  arr.forEach(subArr => {
    for (let i = 0; i < subArr[1]; i++) newArr.push(subArr[0])
  })
  return newArr
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
