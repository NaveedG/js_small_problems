// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

fibonacci = num => {
	const arr = [0, 1]
	let newFib = 1
	while (!arr[num]) {
		arr.push(newFib)
		newFib = (arr[arr.length - 1] + arr[arr.length - 2])
	}
	return arr[num]
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
