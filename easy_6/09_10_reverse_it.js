// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.

reverseSentence = str => str.split(' ').reverse().join(' ')

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"

/* Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument.
All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space. */

reverseWords = str => {
  const arr = str.split(' ')
  const reverseArr = arr.map(word => (word.length > 4) ? reverseWord(word) : word)
  return reverseArr.join(' ')
}

reverseWord = str => str.split('').reverse().join('')

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"