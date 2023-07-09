// Memoization is a way of storing values of any heavy function which leads to better performance

let hashmap = new Map()

const fibonacci = (num) => {
  if (num <= 2) return 1
  if (hashmap.has(num)) return hashmap.get(num)

  let result = fibonacci(num - 1) + fibonacci(num - 2)
  hashmap.set(num, result)
  return result
}

console.time('Fibonacci')
console.log(fibonacci(12))
console.timeEnd('Fibonacci')

// Output:
// 144
// Fibonacci: 7.129ms

let map = new Map()

const factorial = (num) => {
  if (num <= 1) return 1
  if (map.has(num)) return map.get(num)

  let result = num * factorial(num - 1)
  map.set(num, result)
  return result
}

console.time('Factorial')
console.log(factorial(12))
console.timeEnd('Factorial')

// Output:
// 479001600
// Factorial: 0.557ms
