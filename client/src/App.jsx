import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { saveToLocal, loadFromLocal } from './lib/localStorage'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'
import TrackForm from './components/TrackForm'
import Profile from './pages/User'
import Track from './pages/Track'
import Artist from './pages/Artist'

export default function App() {
  const [tracks, setTracks] = useState(loadFromLocal('_TRACKS') ?? [])
  const [artists, setArtists] = useState(loadFromLocal('_ARTISTS') ?? [])
  const [user, setUser] = useState(loadFromLocal('_USER') ?? {})

  async function fetchTracks() {
    try {
      const response = await fetch('/api/track')
      const trackFromApi = await response.json()
      setTracks(trackFromApi)
    } catch (error) {
      console.log(error.message)
    }
  }

  // Get Artist, Tracks, Users
  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(() => {
    saveToLocal('_TRACKS', tracks)
  }, [tracks])

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch('/api/artist')
        const artistFromApi = await response.json()
        setArtists(artistFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchArtists()
  }, [])

  useEffect(() => {
    saveToLocal('_ARTISTS', artists)
  }, [artists])

  useEffect(() => {
    saveToLocal('_USER', user)
  }, [user])

  async function fetchUserAndLogin(name) {
    try {
      const response = await fetch('/api/user/' + name)
      const userFromApi = await response.json()
      setUser(userFromApi)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function addToFavourite(track, user) {
    const addToFavouriteTrack = {
      trackId: track._id,
      userId: user._id,
    }
    const result = await fetch('/api/favourite', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(addToFavouriteTrack),
    })
    return await result.json(addToFavouriteTrack)
  }

  async function removeFromFavourite(track, user) {
    const favouriteTrack = {
      trackId: track._id,
      userId: user._id,
    }
    const result = await fetch('/api/favourite/remove', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(favouriteTrack),
    })
    return await result.json(favouriteTrack)
  }

  async function handleAddToFavourites(track, user) {
    if (track.fav_of_user.includes(user._id)) {
      await removeFromFavourite(track, user)
    } else {
      await addToFavourite(track, user)
    }
    fetchTracks()
    // TODO: fetch use
    fetchUserAndLogin(user.first_name)
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/search'
          element={<SearchBar artists={artists} tracks={tracks} />}
        ></Route>
        <Route
          path='/profile'
          element={
            <Profile tracks={tracks} user={user} onLoginUser={setUser} />
          }
        ></Route>
        <Route
          path='/profile/:name'
          element={
            <Profile
              tracks={tracks}
              user={user}
              onLoginUser={fetchUserAndLogin}
            />
          }
        ></Route>
        <Route
          path='/trackform'
          element={<TrackForm artists={artists} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path='/artist/:artist_name'
          element={<Artist artists={artists} tracks={tracks} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path='/track/:track_name'
          element={
            <Track
              tracks={tracks}
              user={user}
              onAddToFavourites={handleAddToFavourites}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  )
}

// //body: JSON.stringify(track),

// async function addTracksToFavourites(track) {
//   const result = await fetch('api/favourite/61e6732cb45e3076aadeae41/', {
//     method: 'POST',
//   })

//   return await result.json()
// }

// addTracksToFavourites={addTracksToFavourites}
