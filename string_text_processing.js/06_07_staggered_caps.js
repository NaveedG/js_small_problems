/* Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. 
Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case. */

staggeredCase = str => {
  let count = 0
  const arr = str.split('').map(char => {
    count += 1
    return (count % 2 != 0) ? char.toUpperCase() : char.toLowerCase()
  })
  return arr.join('')
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"

/* Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. 
The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case. */

staggeredCase = str => {
  let count = 0
  const arr = str.split('').map(char => {
    if (char === char.replace(/[a-z]/gmi)) {
      return char
    } else {
      count += 1
      return (count % 2 != 0) ? char.toUpperCase() : char.toLowerCase()
    }
  })
  return arr.join('')
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!"); // true
console.log(staggeredCase("ALL CAPS") === "AlL cApS"); // true
console.log(staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"); // true
