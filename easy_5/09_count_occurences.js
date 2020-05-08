/* Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV"). */

countOccurrences = arr => {
  const obj = {}
  arr.forEach(element => (obj[element]) ? obj[element] += 1 : obj[element] = 1)
  for (let [key, value] of Object.entries(obj)) console.log(`${key} => ${value}`)
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2 */