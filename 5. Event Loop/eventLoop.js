console.log(1) // Executes instantly

setTimeout(() => {
  console.log(2)
}, 1000) // Goes to the task queue with timer of 1000ms

setTimeout(() => {
  console.log(3)
}, 0) // Goes to the tast queue with timer of 0 ms

new Promise(() => {
  console.log(4) // Goes to microtask queue
})

// Output
// 1
// 4
// 3
// 2
