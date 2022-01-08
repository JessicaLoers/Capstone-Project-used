import TrackCard from './TrackCard'
import tracksdata from '../lib/tracksdata'
import { useState } from 'react'
import styled from 'styled-components'

export default function SearchBar() {
const [trackdata, setTrackdata] = useState('')


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
          )) 
        }
    </SearchBarWrapperStyled>
  )
}

const SearchBarWrapperStyled = styled.div`
  margin-top: 3rem;
`
