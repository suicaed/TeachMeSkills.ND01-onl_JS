class House {
  constructor(length, width, floors) {
    this.length = length
    this.width = width
    this.floors = floors
  }

  static sortByFloors(array) {
    return array.sort((a, b) => a.floors - b.floors)
  }
}

class Skyscraper extends House {
  constructor(length, width, floors, offices) {
    super(length, width, floors)
    this.offices = offices
  }
}

const house1 = new House(12, 22, 2)
const house2 = new House(9, 24, 4)
const house3 = new House(28, 124, 8)
const house4 = new House(9, 4, 1)
const house5 = new House(19, 10, 3)
const house6 = new Skyscraper(120, 210, 24, 50)
const house7 = new Skyscraper(110, 110, 52, 136)
const house8 = new Skyscraper(54, 68, 19, 65)

const array = [house1, house2, house3, house4, house5, house6, house7, house8]

const sorted = House.sortByFloors(array)
console.log(sorted)
