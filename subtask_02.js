'use strict';

(() => {
  const localStorageNames = {
    germanCars: 'germanCars',
    japaneseCars: 'japaneseCars'
  }
  const germanCars = localStorage.getItem(localStorageNames.germanCars)
  const japaneseCars = localStorage.getItem(localStorageNames.japaneseCars)

  if (germanCars) {
    console.log('German cars string was found in local storage:', JSON.parse(germanCars))
  }

  if (japaneseCars) {
    console.log('Japanese cars string was found in local storage:', JSON.parse(japaneseCars))
  }

  if (!germanCars || !japaneseCars) {
    const inputString = '[{"car": "BMW", "model": "5-series e39"}, {"car": "Honda", "model":  "Civic (5G)"}, {"car": "Nissan", "model": "Silvia (S14)"}, {"car": "Volkswagen", "model": "Golf MK 3"}]'

    const splited = splitCars(inputString)

    if (!germanCars) {
      console.log('German cars string was not found in local storage. Writing...')
      localStorage.setItem(localStorageNames.germanCars, splited.german)
    }

    if (!japaneseCars) {
      console.log('Japanese cars string was not found in local storage. Writing...')
      localStorage.setItem(localStorageNames.japaneseCars, splited.japanese)
    }
  }

})()

function splitCars(carsString) {
  const germanCarNames = ['BMW', 'Volkswagen']
  const japaneseCarNames = ['Honda', 'Nissan'];

  const allCars = JSON.parse(carsString)

  const germanCars = allCars.filter(car => germanCarNames.includes(car.car))
  const japaneseCars = allCars.filter(car => japaneseCarNames.includes(car.car))

  const germanCarsString = JSON.stringify(germanCars)
  const japaneseCarsString = JSON.stringify(japaneseCars)

  return {
    german: germanCarsString,
    japanese: japaneseCarsString
  }
}
