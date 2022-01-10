import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { saveToLocal, loadFromLocal } from '../lib/localStorage'


export default function ArtistOverview() {

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


//   const { artist_Name } = useParams()
//   const thisArtist = artist.find((item) => item.artistName === artist_Name)

  return (
    <div>
        <h1>hello</h1>
{artists
        .map((artist) => (
          <ArtistCard
            key={artist._id}
            artistName={artist.artistName}
            infos={artist.infos}
            tracks={artist.tracks}
            artist_image={artist.artist_image}
          />
        ))}
    </div>
  )
}
