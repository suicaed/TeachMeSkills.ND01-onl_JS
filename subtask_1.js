const arr = [-10, 1, 2, 3, 4, 4, 4, 4, 5, 2, 9, 4, 0, 0, -1, -2, -1]

const uniqueArr = arr.reduce((newArray, item) => {
  if (arr.indexOf(item) === arr.lastIndexOf(item)) {
    return [...newArray, item]
  }

  return newArray
}, [])

console.log(uniqueArr)