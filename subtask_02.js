'use strict'

const inputString = '[{"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}]'

const germanCarNames = ['BMW', 'Volkswagen']
const japaneseCarNames = ['Honda', 'Nissan'];

(async () => {
  const allCars = JSON.parse(inputString)

  const germanCars = allCars.filter(car => germanCarNames.includes(car.car))
  const japaneseCars = allCars.filter(car => japaneseCarNames.includes(car.car))

  const germanCarsString = JSON.stringify(germanCars)
  const japaneseCarsString = JSON.stringify(japaneseCars)

  console.log(`\nGerman cars string: ${germanCarsString}\nJapanese cars string: ${japaneseCarsString}`)
})()
