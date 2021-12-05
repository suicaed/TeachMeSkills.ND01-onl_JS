console.everyUser = function (users, prefix) {
  for (let i = 0; i < users.length; i++) {
    console.log(`${prefix}${users[i].name}`)
  }
}

const userpetya = {
  name: "petya",
  transactions: [123, 123213213, -5, -8],
  sum: 10
}


const uservasya = {
  name: "vasya",
  transactions: [10, 20, -5, -8],
  sum: 10
}

const usersArray = [userpetya, uservasya];

console.everyUser(usersArray, 'Имя пользователя: ') // Массив пользователей [userpetya, uservasya], префикс 'Имя пользователя: ')
// Имя пользователя: petya
// Имя пользователя: vasya