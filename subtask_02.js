let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }

const { name: userName, years: userYears, car: userCar, ...userOtherInfo } = user

console.log(userName, userYears, userCar, userOtherInfo)
