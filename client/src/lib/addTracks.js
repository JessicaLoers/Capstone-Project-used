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

// async function addTracksToDatabase(track, user) {
//     const addUser = {
//       userId: user._id,
//     }

//     const result = await fetch('/api/track', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(track, addUser),
//     })
//     return await result.json()
//   }

//   export { addTracksToDatabase }
