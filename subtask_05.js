function User (firstName, secondName, age, city) {
  this.firstName = firstName
  this.secondName = secondName
  this.age = age
  this.city = city
  this.aboutMe = () => `Hello! My name is ${this.firstName} ${this.secondName}, I'm ${age} yo. Btw I'm from ${city}`
}

const firstUser = new User('Nikola', 'Tesla', 86, 'Smilyan')
const secondUser = new User('Restructor', 'Pogromov', 100, 'Moscow')

console.log(firstUser.aboutMe())
console.log(secondUser.aboutMe())
