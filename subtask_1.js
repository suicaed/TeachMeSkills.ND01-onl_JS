const users = [{ name: 'Ivan', age: 18 }, { name: 'Petr', age: 12 }, { name: 'Sidor', age: 25 }, { name: 'Pavel', age: 16 }, { name: 'Sasha', age: 29 }]

const sortedUsers = users.sort((a, b) => a.age > b.age ? 1 : -1)
const sumYoung = users.reduce((sum, user) => user.age < 18 ? sum + user.age : sum, 0)

console.log(`Sorted by age: ${JSON.stringify(sortedUsers)}\nSum: ${sumYoung}`)