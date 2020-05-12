// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

repeater = str => {
  let newStr = ''
  for (let i = 0; i < str.length; i++) newStr += str[i] + str[i]
  return newStr
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""