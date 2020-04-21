/* Create a function that takes two arguments, multiplies them together, and returns the result.

Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument (the square is the result of multiplying a number by itself). */

multiply = (x, y) => x * y

square = num => multiply(num, num)


console.log(multiply(5, 3) === 15); // true
console.log(square(5) === 25); // true
console.log(square(-8) == 64); // true