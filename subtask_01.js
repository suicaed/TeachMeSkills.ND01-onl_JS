'use strict'

cleanRoom().then(() => console.log('Room was cleaned'))

function cleanRoom() {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })

  return promise
}
