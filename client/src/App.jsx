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
  const localStorageTracks = loadFromLocal('_TRACKS')
  const [tracks, setTracks] = useState(localStorageTracks ?? [])

  //const localStorageTracks = loadFromLocal('_TRACKS')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    async function fetchArtist() {
      try {
        const response = await fetch('api/artist')
        const artistFromApi = await response.json()
        setArtists(artistFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchArtist()
  }, [])

  async function fetchTracks() {
    const result = await fetch('api/track') //fetch('http://localhost:4000/api/track')
    const resultJson = await result.json()
    setTracks(resultJson)
  }

  useEffect(() => fetchTracks(), [])

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
    fetchTracks()
  }

  const addedTracks = tracks.map((track) => ({
    // key: track.track_id,
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
          element={artists.map((artist) => (
            <ArtistOverview
            key={artist._id}
            artistName={artist.artistName}
            infos={artist.infos}
            artist_image={artist.artist_image}
            tracks={artist.tracks}
            allArtist={artists}
            />
          ))}
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
