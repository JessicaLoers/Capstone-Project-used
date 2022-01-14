import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { saveToLocal, loadFromLocal } from './lib/localStorage'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'
import TrackForm from './components/TrackForm'
import Profile from './components/MemberProfile'
import Track from './pages/Track'
import Artist from './pages/Artist'

export default function App() {
  const [tracks, setTracks] = useState(loadFromLocal('_TRACKS') ?? [])
  const [artists, setArtists] = useState(loadFromLocal('_ARTISTS') ?? [])
  const [favTracks, setFavTracks] = useState(loadFromLocal('_FAV_TRACKS') ?? [])

  useEffect(() => {
    saveToLocal('_FAV_TRACKS', favTracks)
  }, [favTracks])

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

  async function addTracksToDatabase(track) {
    const result = await fetch('api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(track),
    })
    return await result.json()
  }

  async function addArtistToDatabase(artist) {
    const result = await fetch('api/artist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(artist),
    })
    return await result.json()
  }
  // --> FAV TRACKS
  function isTrackInListofFavs(favTrackToAdd) {
    return favTracks.some(
      (everyFavTrack) => everyFavTrack._id === favTrackToAdd._id
    )
  }

  function removeTrackFromListOfFavs(track) {
    return favTracks.filter((everyFavTrack) => everyFavTrack._id !== track._id)
  }

  function addTrackToFavs(favTrackToAdd) {
    if (isTrackInListofFavs(favTrackToAdd)) {
      const favsToKeep = removeTrackFromListOfFavs(favTrackToAdd)
      setFavTracks(favsToKeep)
    } else {
      setFavTracks([...favTracks, favTrackToAdd])
    }
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
          path='/profile/:name'
          element={
            <Profile
              tracks={tracks}
              onAddToFavs={addTrackToFavs}
              isFavsTrack={isTrackInListofFavs(tracks)}
            />
          }
        ></Route>
        <Route
          path='/trackform'
          element={
            <TrackForm
              artists={artists}
              onAddToFavs={addTrackToFavs}
              isFavsTrack={isTrackInListofFavs}
            />
          }
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
          path='track/:track_name'
          element={<Track tracks={tracks} />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  )
}
