async function addSamplesToTracks(track) {
  const trackSamples = {
    sampeldInTrackName: track.sampled_in,
    sampeldTrackName: track.sampled,
  }
  const result = await fetch('/api/add-sample', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(trackSamples),
  })
  return await result.json(trackSamples)
}
