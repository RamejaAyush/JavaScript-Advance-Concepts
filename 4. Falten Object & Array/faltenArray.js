const faltenArray = (arr) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]

    if (Array.isArray(current)) {
      // Checks if the ele is array
      result = result.concat(faltenArray(current))
    } else {
      result.push(current)
    }
  }

  return result
}

const arr = [1, [2, [3]], [[4, [5]]], 6, [[[7, [8]]]]]

console.log(faltenArray(arr)) //[1, 2, 3, 4, 5, 6, 7, 8]
