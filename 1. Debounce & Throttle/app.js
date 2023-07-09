const input = document.querySelector('input')
let defaultText = document.getElementById('default')
let debounceText = document.getElementById('debounce')
let throttleText = document.getElementById('throttle')

const debounceInputText = debounce((text) => {
  debounceText.innerText = text
})

const throtteInputText = throttle((text) => {
  throttleText.innerText = text
})

input.addEventListener('input', (e) => {
  let data = e.target.value
  defaultText.innerText = data
  debounceInputText(data)
  throtteInputText(data)
})

// * Pause the execution till user is done typing
function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

// * Pause the execution for sometime, then execute, then pause...
function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs = null

  const timeoutFunction = () => {
    if (waitingArgs == null) {
      shouldWait = false
    } else {
      cb(...waitingArgs)
      waitingArgs = null

      setTimeout(timeoutFunction, delay)
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunction, delay)
  }
}
