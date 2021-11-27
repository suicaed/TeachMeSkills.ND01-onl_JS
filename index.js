const person = {
  name: prompt('Как Вас зовут?', 'Инкогнито'),
  surname: prompt('Ваша фамилия?'),
  age: Number(prompt('Ваш возраст?')),
  city: prompt('Из какого Вы города?'),
  isDriver: confirm('Вы водите автомобиль?'),
}

const message = `Привет, меня зовут ${person.name} ${person.surname}, мне ${person.age}.\nЯ из города ${person.city}. ${person.isDriver ? 'Я вожу автомобиль.': 'Пока у меня нет прав..'}`;

console.log(message);