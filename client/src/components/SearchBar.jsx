import TrackCard from './TrackCard'
import ArtistCard from './ArtistCard'
import tracksdata from '../lib/tracksdata'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function SearchBar({ artists }) {
  const [trackdata, setTrackdata] = useState('')

  return (
    <SearchBarWrapperStyled>
      {artists?.map((artist) => (
        <div>
          <ArtistCard
            
            artistName={artist.artistName}
            artist_image={artist.artist_image}
          />
        </div >
      ))}
    </SearchBarWrapperStyled>
  )
}

const SearchBarWrapperStyled = styled.div`
  margin-top: 3rem;
`

{
  /* <input
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
  ))} */
}
