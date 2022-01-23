// async function addTracksToDatabase(track) {
//   const result = await fetch('/api/track', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(track),
//   })
//   return await result.json()
// }

// export { addTracksToDatabase }

async function addTracksToDatabase(track) {
  const result = await fetch('/api/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(track),
  })
  return await result.json()
}

export { addTracksToDatabase }
