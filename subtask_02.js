'use strict'

cleanRoom(3).then(console.warn).catch(console.error)
cleanRoom(0).then(console.warn).catch(console.error)
cleanRoom(-2).then(console.warn).catch(console.error)
cleanRoom(12).then(console.warn).catch(console.error)

/**
 * 
 * @param {*} dirtyLevel number from 0 to 10
 */
function cleanRoom(dirtyLevel) {
  const promise = new Promise((resolve, reject) => {
    if (dirtyLevel >= 0 && dirtyLevel <= 10) {
      const cleaningTime = dirtyLevel * 1000
      const resolveMessage = dirtyLevel
        ? `[lvl: ${dirtyLevel}] Room was cleaned. Cleaning time: ${dirtyLevel} seconds`
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
