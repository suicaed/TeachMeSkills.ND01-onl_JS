function HouseBuilder (length, width, floors) {
  this.length = length
  this.width = width
  this.floors = floors
}

HouseBuilder.prototype.calcArea = function () {
  const area = this.length * this.width * this.floors
  return area
}

const firstHouse = new HouseBuilder(12, 80, 2)
const secondHouse = new HouseBuilder(24, 92, 4)

firstHouse.totalArea = firstHouse.calcArea()
secondHouse.totalArea = secondHouse.calcArea()
