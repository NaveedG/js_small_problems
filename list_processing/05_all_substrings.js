/* Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. 
This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise. */

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

// new higher-order function
substrings = str => {
  const substrings = []
  let substr = str
  while (substr.length > 0) {
    leadingSubstrings(substr).forEach(str => substrings.push(str)) // helper function call
    substr = substr.slice(1)
  }
  return substrings
}

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */
