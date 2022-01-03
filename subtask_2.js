const factorial = n => {
  if (n < 0) {
    console.error(n, 'n must be a positive number')
    return
  }

  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return n
  }

  return n * factorial(n - 1)
}

console.log(factorial(5))