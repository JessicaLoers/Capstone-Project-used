import styled from 'styled-components'
import { useState } from 'react'

import { isSampleValid } from '../lib/form-validation'

import dead_melody from '../assets/icons/dead_melody.svg'
import used_melody from '../assets/icons/used_melody.svg'

export default function AddSamplePair({ tracks, onAddSamplePair }) {
  const [pair, setPair] = useState({ first: '', second: '' })
  const [hasFormErrors, setHasFormErrors] = useState(false)
  const [hasFormSend, setHasFormSend] = useState(false)

  const sortedTrackNames = tracks.sort((a, b) => {
    if (a.track_name < b.track_name) return -1
    return 1
  })

  const sortedArtistNames = tracks.sort((a, b) => {
    if (a.artist < b.artist) return -1
    return 1
  })

  const handleChange = (event) => {
    const firstOrSecond = event.target.name
    const trackId = event.target.value

    setPair({ ...pair, [firstOrSecond]: trackId })
  }
  console.log(pair)

  const handleSubmit = () => {
    if (isSampleValid(pair)) {
      onAddSamplePair(pair)
      setHasFormErrors(false)
      setHasFormSend(true)
    } else {
      setHasFormErrors(true)
      setHasFormSend(false)
    }
  }

  return (
    <div>
      {hasFormErrors && (
        <ErrorMessage>
          <img src={dead_melody} alt='' className='melody' />

          <p>
            <strong>Oh no! </strong>
            Select two different tracks.
          </p>
        </ErrorMessage>
      )}
      {hasFormSend && (
        <ErrorMessage>
          <img src={used_melody} alt='' className='melody' />

          <p>
            <strong>Yes! </strong>
            Your Sample is added.
          </p>
        </ErrorMessage>
      )}
      <AddSampleForm>
        <label htmlFor='first-artist'></label>
        <select value={tracks._id} name='first-artist' id={tracks._id}>
          <option value=''>choose artist ... </option>
          {sortedArtistNames.map((track) => (
            <option key={track._id} value={track._id}>
              {track.artist}
            </option>
          ))}
        </select>

        <label htmlFor='first'></label>
        <select
          value={tracks._id}
          onChange={handleChange}
          name='first'
          id={tracks._id}
        >
          <option value=''>choose track ... </option>
          {sortedTrackNames.map((track) => (
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
          {sortedTrackNames.map((track) => (
            <option key={track._id} value={track._id}>
              {track.track_name}
            </option>
          ))}
        </select>
        <BtnPair>
          <button
            onClick={() => handleSubmit(pair)}
            type='button'
            className='addBtn'
          >
            Add
          </button>

          <button
            className='clearBtn'
            type='reset'
            onClick={() => {
              setPair()
            }}
          >
            Clear
          </button>
        </BtnPair>
      </AddSampleForm>
    </div>
  )
}

const AddSampleForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    display: block;
    padding: 0.4em 1rem;
    text-align: left;
    font-size: 0.8rem;
  }
  input,
  select,
  option {
    background-color: var(--lightgrey);
    border: 0;
    border-radius: 3px;
    font-size: 0.9rem;
    padding-left: 1rem;
    box-sizing: border-box;
    height: 1.8rem;
    color: #848484;
  }

  button:active {
    background-color: #00ce82ab;
  }
`

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
    border: 1px solid var(--secondarycolor);
  }
  .clearBtn {
    border-radius: 0 50px 50px 0;
    background-color: transparent;
    color: var(--secondarycolor);
  }

  .addBtn {
    background-color: var(--secondarycolor);
    border-radius: 50px 0 0 50px;
  }
`
const ErrorMessage = styled.div`
  display: flex;
  align-items: flex-end;
  background: var(--warning);
  color: var(--lightgrey);
  display: flex;
  gap: 0.8rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  .melody {
    width: 4rem;
  }
`
