import TrackCard from './TrackCard'
import ArtistCard from './ArtistCard'
import tracksdata from '../lib/tracksdata'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function SearchBar() {
  const [trackdata, setTrackdata] = useState('')
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


  return (
    <SearchBarWrapperStyled>
      <button>artist</button>
      <br />
      <button>track</button>
      <br />
      <input
        type='search'
        name='search'
        id='search'
        placeholder='search ...'
        value={trackdata}
        onChange={(event) => setTrackdata(event.target.value)}
      />
      {tracksdata
        .filter((track) => {
          if (trackdata === '') {
            return track
          } else if (
            track.title.toLowerCase().includes(trackdata.toLowerCase())
          )
            return track
        })
        .map((track) => (
          <TrackCard
            key={track.track_id}
            trackName={track.title}
            artistName={track.artist_name}
            year={track.year}
            cover={track.cover_image}
          />
        ))}
      <input
        type='search'
        name='search'
        id='search'
        placeholder='search ...'
        value={artists}
        onChange={(event) => setArtists(event.target.value)}
      />
{artists
        // .filter((artist) => {
        //   if (artists === '') {
        //     return artist
        //   } else if (
        //     artist.artistName.toLowerCase().includes(artists.toLowerCase())
        //   )
        //     return artist
        // })
        .map((artist) => (
          <ArtistCard
            key={artist._id}
            artistName={artist.artistName}
            infos={artist.infos}
            tracks={artist.tracks}
            artist_image={artist.artist_image}
          />
        ))}

    </SearchBarWrapperStyled>
  )
}

const SearchBarWrapperStyled = styled.div`
  margin-top: 3rem;
`
