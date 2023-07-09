const infiniteCurrying = (firstArg) => {
  let sum = firstArg

  const recursiveSum = (secArg) => {
    if (secArg !== undefined) {
      sum += secArg
      return recursiveSum
    } else {
      return sum
    }
  }

  return recursiveSum
}

// It is way of adding infinite params and getting custom result
const sum = infiniteCurrying(2)(2)(2)(12)
console.log(sum()) // Output: 18
