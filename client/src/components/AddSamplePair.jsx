import styled from 'styled-components'
import { useState } from 'react'

export default function AddSamplePair({ tracks, onAddSamplePair }) {
  const [pair, setPair] = useState({ first: '', second: '' })

  const handleChange = (event) => {
    const firstOrSecond = event.target.name // first / second
    const trackId = event.target.value

    setPair({ ...pair, [firstOrSecond]: trackId })
  }
  console.log(pair)

  return (
    <div>
      <form>
        <BtnPair>
          <button
            onClick={() => onAddSamplePair(pair)}
            type='button'
            className='addBtn'
          >
            Add
          </button>
          <button
            className='clearBtn'
            type='reset'
            onClick={() => {
              setTrack()
            }}
          >
            Clear
          </button>
        </BtnPair>
        <label htmlFor='first'></label>
        <select
          value={tracks._id}
          onChange={handleChange}
          name='first'
          id={tracks._id}
        >
          <option value=''>choose track ... </option>
          {tracks.map((track) => (
            <option key={track._id} value={track._id}>
              {track.track_name}
            </option>
          ))}
        </select>

        <label htmlFor='second'></label>
        <select
          value={tracks.track_name}
          onChange={handleChange}
          name='second'
          id={tracks._id}
        >
          <option value=''>choose track ... </option>
          {tracks.map((track) => (
            <option key={track._id} value={track._id}>
              {track.track_name}
            </option>
          ))}
        </select>
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

//## Monster
// const handleChange = (event) => {
//     let sampled = event.target.sampledTrack.value
//     let sampled_in = event.target.sampledIn.value

//     let pair = {
//       [event.target.name]: sampled,
//       [event.target.name]: sampled_in,
//     }

//     setTrack({
//       ...track,
//       pair,
//     })
//     console.log(track)
//   }
