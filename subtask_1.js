function avg () {
  const numbers = [...arguments]
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum / numbers.length
}

const example = avg(1, 2, 3, 4, 5, 6, 10, 20, 30)
const averageExample = avg(example)
console.log(averageExample)