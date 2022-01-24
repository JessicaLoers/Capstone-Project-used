import styled from 'styled-components'
import { useState } from 'react'

export default function AddSamplePair({ tracks, artists, onAddSamplePair }) {
  const [track, setTrack] = useState()

  const sortedArtistNames = artists.sort((a, b) => {
    if (a.artist_name < b.artist_name) return -1
    return 1
  })

  const handleChange = (event) => {
    let inputValue = event.target.value

    setTrack({
      ...track,
      [event.target.name]: inputValue,
    })
    console.log(track)
  }

  return (
    <div>
      <form>
        <label htmlFor='sampled-in'></label>
        <select
          value={tracks._id}
          onChange={handleChange}
          name='sampled-in'
          id={tracks._id}
        >
          <option value=''>choose track ... </option>
          {tracks
            .map((track) => (
              <option key={track._id} value={track.track_name}>
                {track.track_name}
              </option>
            ))
            .sort()}
        </select>

        <label htmlFor='used-a-sample'></label>
        <select
          value={tracks.track_name}
          onChange={handleChange}
          name='used-a-sample'
          id={tracks._id}
        >
          <option value=''>choose track ... </option>
          {tracks
            .map((track) => (
              <option key={track._id} value={track.track_name}>
                {track.track_name}
              </option>
            ))
            .sort()}
        </select>
        <BtnPair>
          <button
            type='submit'
            className='addBtn'
            onClick={() => onAddSamplePair(track)}
          >
            Add
          </button>

          <button
            className='clearBtn'
            type='reset'
            onClick={() => {
              setTrack()
              //setHasFormErrors(false)
            }}
          >
            Clear
          </button>
        </BtnPair>
      </form>
    </div>
  )
}

const BtnPair = styled.div`
  align-self: center;
  display: flex;
  margin-top: 1rem;
  button {
    color: var(--darkgrey);
    border: none;
    cursor: pointer;
    color: var(--darkgrey);
    height: 2rem;
    font-size: 0.9rem;
    padding: 5px;
    width: 6rem;
    border: 1px solid var(--cardtrack);
  }
  .clearBtn {
    border-radius: 0 50px 50px 0;
    background-color: transparent;
    color: var(--cardtrack);
  }

  .addBtn {
    background-color: var(--cardtrack);
    border-radius: 50px 0 0 50px;
  }
`
