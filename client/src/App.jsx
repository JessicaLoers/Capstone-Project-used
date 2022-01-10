import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { saveToLocal, loadFromLocal } from './lib/localStorage'

import Header from './components/Header'
import FooterNavigation from './components/FooterNav'
import SearchBar from './components/SearchBar'
import TrackForm from './components/TrackForm'
import Profile from './components/MemberProfile'
import TrackOverview from './pages/TrackOverview'
import ArtistOverview from './pages/ArtistOverview'

export default function App() {
  const [tracks, setTracks] = useState(loadFromLocal('_TRACKS') ?? [])
  const [artist, setArtist] = useState(loadFromLocal('_ARTISTS') ?? [])

  useEffect(() => {
    fetch('api/artist')
      .then((result) => result.json())
      .then((artist) => setArtist(artist))
      .catch((error) => console.error(error.message))

    fetch('api/tracks')
      .then((result) => result.json())
      .then((tracks) => setTracks(tracks))
      .catch((error) => console.error(error.message))
  }, [])

  useEffect(() => {
    saveToLocal('_ARTIST', artist)
  }, [artist])

  useEffect(() => {
    saveToLocal('_TRACKS', tracks)
  }, [tracks])

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

  function addTrack(track) {
    addTracksToDatabase(track)
    console.log(track)
    setTracks()
  }

  const addedTracks = tracks.map((track) => ({
    track_name: track.track_name,
    year: track.year,
  }))


  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<SearchBar />}></Route>
        <Route path='/profile/:name' element={<Profile />}></Route>
      </Routes>
      <Routes>
        <Route
          path='/artist/:artist_name'
          element={<ArtistOverview />}
        ></Route>
      </Routes>
      <Routes>
        <Route path='/track/:title' element={<TrackOverview />}></Route>
      </Routes>
      <Routes>
        <Route
          path='/trackform'
          element={
            <TrackForm onAddTrack={addTrack} addedTracks={addedTracks} />
          }
        ></Route>
      </Routes>
      <FooterNavigation />
    </div>
  )
}
