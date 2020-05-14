/* Write a function that takes a string as argument, and returns true if all parentheses in the string are properly balanced, false otherwise. 
To be properly balanced, parentheses must occur in matching '(' and ')' pairs. */

isBalanced = str => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (count < 0)
      return false
    else if (str[i] === '(')
      count += 1
    else if (str[i] === ')') 
      count -= 1
  }
  return (count === 0)
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.