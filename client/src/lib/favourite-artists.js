async function addToFavouriteArtist(artist, user) {
  const favouriteArtist = {
    artistId: artist._id,
    userId: user._id,
  }
  const result = await fetch('/api/favourite-artist', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(favouriteArtist),
  })
  return await result.json(favouriteArtist)
}
async function removeFromFavouriteArtist(artist, user) {
  const favouriteArtist = {
    artistId: artist._id,
    userId: user._id,
  }
  const result = await fetch('/api/favourite-artist/remove', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(favouriteArtist),
  })
  return await result.json(favouriteArtist)
}

export { addToFavouriteArtist, removeFromFavouriteArtist }
