// using functions
function functionalSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

// Currying is way of invoking functions
// An Higher order function inside higher order function
console.log(functionalSum(2)(2)(2)) // Output: 6

// using Arrow Function
const arrowSum = (a) => (b) => (c) => a + b + c
console.log(arrowSum(2)(2)(2)) // Output: 6
