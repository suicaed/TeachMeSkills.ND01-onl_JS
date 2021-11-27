const a = Number(prompt('Введите число'))
let message_1

if (a) {
  message_1 = 'Верно'
} else {
  message_1 = 'Неверно'
}

console.log(`Сообщение из If-Else: ${message_1}`)

const message_2 = a ? 'Верно' : 'Неверно'
console.log(`Сообщение из Ternary Operator: ${message_2}`)
