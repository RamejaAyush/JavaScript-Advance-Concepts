const arr = [1, 2, 3, 4, 5]

/*
 * Map: The map function is used to create a new array from an existing one, applying a function to each one of the elements of the first array.
 * @param {element: element in the array}
 * @param {index: index of the element in the array}
 * @param {array: the whole array}
 * @returns {array: with modified element as given conditions}
 */
const squareOfEachElement = arr.map(
  (element, index, array) => element * element
)
console.log(squareOfEachElement) // [ 1, 4, 9, 16, 25 ]

/*
 * Filter: The filter function is used to create a new array from an existing one, including in the new array only those elements for which a provided function returns true.
 * @param {element: element in the array}
 * @param {index: index of the element in the array}
 * @param {array: the whole array}
 * @returns {array: the elements which comes under the condition}
 */
const elementGreaterThan5 = squareOfEachElement.filter(
  (element, index, array) => element > 5
)

console.log(elementGreaterThan5) // [ 9, 16, 25 ]

/*
 * Reduce: The reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It's a bit different from map and filter as it returns a single value.
 * @param {accumulator: It keeps track of prev values, or takes the initial value}
 * @param {value: each element in the array}
 * @returns {number: sum of all element in the array}
 */

const sumOfElements = elementGreaterThan5.reduce(
  (accumulator, value, index, wholeArray) => accumulator + value,
  0 // initial value
)
console.log(sumOfElements) // 50
