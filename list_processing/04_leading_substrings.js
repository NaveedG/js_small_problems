// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.

leadingSubstrings = str => {
  const substrings = []
  let substr = ''
  str.split('').forEach(char => {
    substr += char
    substrings.push(substr)
  })
  return substrings
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
