const age = Number(prompt('Введите свой возраст'))
let message_1, message_2

if (age && age > 0) {
  if (age <= 18) {
    message_1 = `Привет! Мой возраст: ${age}`
  } else {
    message_1 = `Здравствуйте! Мой возраст: ${age}`
  }

  switch(true) {
    case (age <= 18):
      message_2 = `Привет! Мой возраст: ${age}`
      break
    case (age > 18):
      message_2 = `Здравствуйте! Мой возраст: ${age}`
      break
    default:
      message_2 = 'Привет! Мой возраст уникален'
  }
} else {
  message_2 = message_1 = 'Возраст указан неверно'
}

console.log(`Сообщение из If-Else: ${message_1}`)
console.log(`Сообщение из Switch-Case: ${message_2}`)