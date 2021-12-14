const avgArrow = (...arguments) => {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum / arguments.length
}

const avgExpression = function () {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum / arguments.length
}

function avg () {
  let sum = 0

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }

  return sum / arguments.length
}

const example = avg(1, 2, 3, 4, 5, 6, 10, 20, 30)
const averageExample = avg(example)
console.log(averageExample)