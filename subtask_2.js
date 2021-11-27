const age = Number(prompt('Введите свой возраст'))
let message_1

if (age && age > 0) {
  message_1 = `Привет! Мой возраст: ${age}`
} else {
  message_1 = 'Возраст указан неверно'
}

console.log(`Сообщение из If-Else: ${message_1}`)

const message_2 = age && age > 0 ? `Привет! Мой возраст: ${age}` : 'Возраст указан неверно'
console.log(`Сообщение из Ternary Operator: ${message_2}`)