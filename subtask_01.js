function HouseBuilder (length, width, floors) {
  this.length = length
  this.width = width
  this.floors = floors
}

const firstHouse = new HouseBuilder(12, 80, 2)
const secondHouse = new HouseBuilder(24, 92, 4)