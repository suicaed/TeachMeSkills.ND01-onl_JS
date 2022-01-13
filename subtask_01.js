function User (firstName, secondName, age, city) {
  this.firstName = firstName
  this.secondName = secondName
  this.age = age
  this.city = city
}

const firstUser = new User('Nikola', 'Tesla', 86, 'Smilyan')
const secondUser = new User('Restructor', 'Pogromov', 100, 'Moscow')

function aboutUser () {
  console.log(`Hello! My name is ${this.firstName} ${this.secondName}, I'm ${this.age} yo. Btw I'm from ${this.city}`)
}

aboutUser.call(firstUser)
aboutUser.call(secondUser)
