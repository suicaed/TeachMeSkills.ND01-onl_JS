let restart = false

do {
  let attemptsLeft,
    attemptsValid,
    expectedColor = prompt('Загадайте цвет..'),
    color

  while (!attemptsValid) {
    const invalidNumber = typeof attemptsLeft !== 'undefined'
    attemptsLeft = Number(prompt(`${invalidNumber ? 'Введено некорректное значение.\n' : ''}Введите желаемое количество попыток`))
    attemptsValid = attemptsLeft && attemptsLeft > 0
  }

  while (expectedColor !== color && attemptsLeft > 0) {
    const firstTry = typeof color === 'undefined'
    const message_atempts = attemptsLeft > 1 ? `Попыток осталось: ${attemptsLeft}` : 'Последняя попытка!'
    color = prompt(`${firstTry ? '' : 'Неверно!\n'}${message_atempts}\nПопробуйте угадать цвет..`)
    attemptsLeft--
  }

  if (expectedColor === color) {
    restart = confirm('Поздравляем, вы угадали!\nСыграть ещё раз?')
  } else {
    restart = confirm('К сожалению, вы проиграли\nСыграть ещё раз?')
  }
} while (restart)