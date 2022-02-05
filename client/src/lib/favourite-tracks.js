async function addToFavouriteTrack(track, user) {
  const addToFavouriteTrack = {
    trackId: track._id,
    userId: user._id,
  };
  const result = await fetch('/api/favourite', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(addToFavouriteTrack),
  });
  return await result.json(addToFavouriteTrack);
}
async function removeFromFavouriteTrack(track, user) {
  const favouriteTrack = {
    trackId: track._id,
    userId: user._id,
  };
  const result = await fetch('/api/favourite/remove', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(favouriteTrack),
  });
  return await result.json(favouriteTrack);
}

export { addToFavouriteTrack, removeFromFavouriteTrack };
