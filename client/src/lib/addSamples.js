async function addSamplesToTracks(pair) {
  const trackSamples = {
    sampledInId: pair.first,
    sampledId: pair.second,
  }
  const result = await fetch('/api/track/add-sample', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(trackSamples),
  })
  return await result.json(trackSamples)
}
export { addSamplesToTracks }
