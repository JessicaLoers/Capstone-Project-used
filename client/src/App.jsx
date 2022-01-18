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

  // Get Artist, Tracks, Users
  useEffect(() => {
    async function fetchTracks() {
      try {
        const response = await fetch('api/track')
        const trackFromApi = await response.json()
        setTracks(trackFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchTracks()
  }, [])

  useEffect(() => {
    saveToLocal('_TRACKS', tracks)
  }, [tracks])

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch('api/artist')
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

  //body: JSON.stringify(track),

  async function addTracksToFavourites(track) {
    const result = await fetch('api/favourite', {
      method: 'POST',
    })

    return await result.json()
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
            <Profile tracks={tracks} user={user} onLoginUser={setUser} />
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
              addTracksToFavourites={addTracksToFavourites}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  )
}
