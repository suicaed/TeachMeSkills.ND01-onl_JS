const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8]
const arr2 = [1, -2, 50, 9, -8, 15, 2]
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78]

const getNewArrFromGroup = (arr) => {
  let newArray = []

  for (let i = 0; i < arr.length; i++) {
    let newSubArray = []

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0 && arr[i][j] < 0) {
        newSubArray.push(arr[i][j])
      }
    }

    newArray.push(...newSubArray)
  }

  return newArray
}

const newArrFromGroup = getNewArrFromGroup([arr1, arr2, arr3])
console.log(newArrFromGroup)