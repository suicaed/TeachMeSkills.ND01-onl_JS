'use strict';

(async () => {
  try {
    const sortedAlbums = await getSortedAlbums()
    console.log('Sorted albums: ', sortedAlbums)
  } catch (error) {
    console.error(error)
  }
})()

async function getSortedAlbums() {
  const url = 'https://jsonplaceholder.typicode.com/albums'

  const result = await fetch(url)
  if (result.status === 200) {
    const albums = await result.json()
    const sortedAlbums =
      albums.filter(album => album.userId === 1 || album.userId === 4)
    return sortedAlbums
  }

  throw new Error(`Failed to fetch albums: response status ${result.status}`)
}
