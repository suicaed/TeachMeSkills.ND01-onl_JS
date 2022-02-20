'use strict'

const roomsDirtyLevels = [1, 2, -3, 4, 0, -2, 1, 2]
cleanRoomSeries(roomsDirtyLevels)

/**
 * 
 * @param {*} rooms array of numbers from 0 to 10
 */
function cleanRoomSeries(rooms) {
  const [firstRoom, ...roomsLeft] = rooms

  if (typeof firstRoom === 'number') {
    const infoMessage = roomsLeft.length
      ? `Have to clean ${roomsLeft.length} more rooms..`
      : 'That was a last one.'

    cleanRoom(firstRoom).then(result => {
      console.warn(result)
      console.warn(infoMessage)
      cleanRoomSeries(roomsLeft)
    }).catch(error => {
      console.warn(error)
      console.warn(infoMessage)
      cleanRoomSeries(roomsLeft)
    })
  }
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
