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


export default function App() {
  const localStorageTracks = loadFromLocal('_tracks')
  const [tracks, setTracks] = useState(localStorageTracks ?? [])

  async function fetchTracks() {
    const result = await fetch('api/track')  //fetch('http://localhost:4000/api/track')
    const resultJson = await result.json()
    setTracks(resultJson)
  }

  useEffect(() => fetchTracks(), [])

  useEffect(() => {
    saveToLocal('_tracks', tracks)
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
    fetchTracks()
  }


 const addedTracks = tracks.map((track) => ({
     // key: track.track_id,
      trackName: track.title,
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
        <Route path='/track/:title' element={<TrackOverview />}></Route>
      </Routes>
      <Routes>
        <Route
          path='/trackform'
          element={<TrackForm onAddTrack={addTrack} addedTracks={addedTracks}/>}
        ></Route>
      </Routes>
      <FooterNavigation />
    </div>
  )
}
