import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { saveToLocal, loadFromLocal } from './lib/localStorage'
import {
  addToFavouriteTrack,
  removeFromFavouriteTrack,
} from './lib/favourite-tracks'
import {
  addToFavouriteArtist,
  removeFromFavouriteArtist,
} from './lib/favourite-artists'
import { addTracksToDatabase } from './lib/addTracks'
import { addArtistToDatabase } from './lib/addArtist'
import { addSamplesToTracks } from './lib/addSamples'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'
import Add from './pages/Add'
import Profile from './pages/Profile'
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
  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(() => {
    saveToLocal('_TRACKS', tracks)
  }, [tracks])

  async function fetchArtists() {
    try {
      const response = await fetch('/api/artist')
      const artistFromApi = await response.json()
      setArtists(artistFromApi)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchArtists()
  }, [])
  useEffect(() => {
    saveToLocal('_ARTISTS', artists)
  }, [artists])

  async function fetchUserAndLogin(name) {
    try {
      const response = await fetch('/api/user/' + name)
      const userFromApi = await response.json()
      setUser(userFromApi)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    saveToLocal('_USER', user)
  }, [user])

  async function handleAddToFavouriteTrack(track, user) {
    if (track.fav_of_user.includes(user._id)) {
      await removeFromFavouriteTrack(track, user)
    } else {
      await addToFavouriteTrack(track, user)
    }
    fetchTracks()
    fetchUserAndLogin(user.first_name)
  }

  async function handleAddToFavouriteArtist(artist, user) {
    if (artist.fav_of_user.includes(user._id)) {
      await removeFromFavouriteArtist(artist, user)
    } else {
      await addToFavouriteArtist(artist, user)
    }
    fetchArtists()
    fetchUserAndLogin(user.first_name)
  }

  function handleAddTrack(track) {
    addTracksToDatabase(track)
    fetchTracks()
    fetchUserAndLogin(user.first_name)
  }

  function handleAddArtist(artist) {
    addArtistToDatabase(artist)
    fetchArtists()
    fetchUserAndLogin(user.first_name)
  }

  function handleAddSamplePair(pair) {
    addSamplesToTracks(pair)
    fetchTracks()
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
          element={
            <SearchBar
              artists={artists}
              tracks={tracks}
              onTrackRender={fetchTracks}
              onArtistRender={fetchArtists}
            />
          }
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
          path='/add'
          element={
            <Add
              artists={artists}
              tracks={tracks}
              user={user}
              onAddTrack={handleAddTrack}
              onAddArtist={handleAddArtist}
              onAddSamplePair={handleAddSamplePair}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path='/artist/:artist_name'
          element={
            <Artist
              artists={artists}
              tracks={tracks}
              user={user}
              onAddToFavourites={handleAddToFavouriteArtist}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path='/track/:track_name'
          element={
            <Track
              tracks={tracks}
              user={user}
              onAddToFavourites={handleAddToFavouriteTrack}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  )
}
