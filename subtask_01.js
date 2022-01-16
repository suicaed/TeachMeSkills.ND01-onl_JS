/*
Напишите функцию function invert(data) { ...}, которая принимает на вход массив или строку и отдает на выходе их перевернутыми. 
После этого попытайтесь улучшить задачу, чтобы проход по данным осуществлялся с начала и конца навстречу, это ускорит выполнение в два раза.
*/

function invert(data) {
  const result = [...data]
  for (let i = 0; i < (result.length - 1) / 2; i++) {
    const temp = result[i]
    result[i] = result[result.length - 1 - i]
    result[result.length - 1 - i] = temp
  }

  return Array.isArray(data) ? result : result.join('')
}

const example1 = 'Everything determine everything'
const example2 = [0, 1, 2, 3, 4, 5]
console.log(invert(example1))
console.log(invert(example2))

// Or use Array.prototype.reverse()
