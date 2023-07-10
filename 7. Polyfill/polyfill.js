// * Pollyfill: A polyfill is a piece of code (usually JavaScript on the web) used to provide modern functionality on older browsers that do not natively support it. The term is a blend of "polymer" and "filler", referring to a "plastic compound used to fill cracks in surfaces before painting", which conveys the idea that polyfills fill in the gaps in older browsers' JavaScript implementations.

// ! this keyword points to the global execution context, i.e the array itself

/*
 * creating Map function from polyfill
 * @param {callback: function that will be executed}
 * @returns {array: the elements of the array}
 */
Array.prototype.myMap = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }

  return result
}

const arr = [1, 2, 3, 4, 5]
const squaredElements = arr.myMap(
  (element, index, wholeArr) => element * element
)

console.log(squaredElements) // [ 1, 4, 9, 16, 25 ]

/*
 * creating Filter function from polyfill
 * @param {callback: function that will be executed}
 * @returns {array: the elements of the array}
 */
Array.prototype.myFilter = function (callback) {
  let result = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i])
  }

  return result
}

const elementsMoreThan5 = squaredElements.myFilter(
  (element, index, wholeArr) => element > 5
)

console.log(elementsMoreThan5) // [ 9, 16, 25 ]

/*
 * creating Reduce function from polyfill
 * @param {callback: function that will be executed}
 * @param {initialValue: Any Initial value}
 * @returns {number: based upon the operation}
 */
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i]
  }

  return accumulator
}

const sumOfElements = elementsMoreThan5.myReduce(
  (accumulator, value, index, wholeArray) => {
    return accumulator + value
  },
  0 // initial value
)
console.log(sumOfElements)
