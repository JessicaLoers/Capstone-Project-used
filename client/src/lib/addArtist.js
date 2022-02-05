async function addArtistToDatabase(artist) {
  const result = await fetch('/api/artist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artist),
  });
  return await result.json();
}

export { addArtistToDatabase };
