// Write a function that takes an array of strings, and returns an array of the same values with all vowels (a, e, i, o, u) removed.

removeVowels = arr => arr.map(str => str.replace(/[aeiou]/gmi, ''))

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
