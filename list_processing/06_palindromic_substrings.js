/* Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. 
The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. 
In addition, assume that single characters are not palindromes. */

// helper function from previous exercise
leadingSubstrings = str => {
  const substrings = []
  let substr = ''
  str.split('').forEach(char => {
    substr += char
    substrings.push(substr)
  })
  return substrings
}

// helper function from previous exercise
substrings = str => {
  const substrings = []
  let substr = str
  while (substr.length > 0) {
    leadingSubstrings(substr).forEach(str => substrings.push(str)) // helper function call
    substr = substr.slice(1)
  }
  return substrings
}

// new helper function
isPalindrome = str => {
  const reverse = str.split('').reverse().join('')
  if (str === reverse) return str
}

// new higher order function
palindromes = strings => {
  const palindromes = []
  strings.split(' ').forEach(str => substrings(str).forEach(substr => palindromes.push(substr))) // first helper function call
  return palindromes.filter(str => str.length > 1 && isPalindrome(str)) // second helper function call
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
