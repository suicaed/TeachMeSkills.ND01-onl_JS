'use strict'

const roomsDirtyLevels = [1, 2, -3, 4, 0, -2, 1, 2]
cleanRoomParallel(roomsDirtyLevels)

/**
 * 
 * @param {*} rooms array of numbers from 0 to 10
 */
function cleanRoomParallel(rooms) {
  const cleaningArr = rooms.map((room) => cleanRoom(room))
  Promise.allSettled(cleaningArr)
    .then(results => results.map(result => console.warn(result.value || result.reason)))
}

/**
 * 
 * @param {*} dirtyLevel number from 0 to 10
 */
function cleanRoom(dirtyLevel) {
  const promise = new Promise((resolve, reject) => {
    if (dirtyLevel >= 0 && dirtyLevel <= 10) {
      const cleaningTime = dirtyLevel * 1000
      const resolveMessage = dirtyLevel
        ? `[lvl: ${dirtyLevel}] Room was cleaned. Cleaning time (seconds): ${dirtyLevel}`
        : `[lvl: ${dirtyLevel}] There is nothing to clean`

      setTimeout(() => resolve(resolveMessage), cleaningTime)
      return
    }

    if (dirtyLevel < 0) {
      reject(`[lvl: ${dirtyLevel}] Invalid dirty level value passed`)
      return
    }

    if (dirtyLevel > 10) {
      reject(`[lvl: ${dirtyLevel}] It is too dirty. I will not clean this`)
    }
  })

  return promise
}
