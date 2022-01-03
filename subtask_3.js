const fibonachi = n => {
  let result = [0, 1]

  if (n < 1) {
    console.error('incorrect argument')
    return undefined
  }

  if (n === 1) {
    return [0]
  }

  if (n === 2) {
    return result
  }

  for (let i = 1; i < n; i++) {
    result[i + 1] = result[i] + result[i - 1]
  }

  return result
}

console.log(fibonachi(5))
