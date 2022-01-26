import styled from 'styled-components'
import { useState } from 'react'
import { isSampleValid } from '../lib/form-validation'
import dead_melody from '../assets/icons/dead_melody.svg'
import used_melody from '../assets/icons/used_melody.svg'

export default function AddSamplePair({
  tracks,
  artists,
  onAddSamplePair,
  user,
}) {
  const [pair, setPair] = useState({ first: '', second: '' })
  const [selection, setSelection] = useState({
    firstArtist: '',
    secondArtist: '',
  })
  const [hasFormErrors, setHasFormErrors] = useState(false)
  const [hasFormSend, setHasFormSend] = useState(false)

  const firstArtistTracks = tracks
    .filter((item) => item.artist === selection.firstArtist)
    .sort()

  const secondArtistTracks = tracks
    .filter((item) => item.artist === selection.secondArtist)
    .sort()

  const handelArtistSelection = (event) => {
    const firstOrSecond = event.target.name
    const artistName = event.target.value
    setSelection({ ...selection, [firstOrSecond]: artistName })
  }

  const handleChange = (event) => {
    const firstOrSecond = event.target.name
    const trackId = event.target.value

    setPair({ ...pair, [firstOrSecond]: trackId })
  }
  const handleSubmit = () => {
    if (isSampleValid(pair, selection)) {
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
            <strong>Oh no, {user.first_name}! </strong>
            Select two different tracks.
          </p>
        </ErrorMessage>
      )}
      {hasFormSend && (
        <ErrorMessage>
          <img src={used_melody} alt='' className='melody' />

          <p>
            <strong>Yes, {user.first_name}! </strong>
            Your Sample is added.
          </p>
        </ErrorMessage>
      )}
      <AddSampleForm>
        <p>This Track</p>
        <label htmlFor='firstArtist'>Artist</label>
        <select
          value={tracks._id}
          onChange={handelArtistSelection}
          name='firstArtist'
          id={tracks._id}
        >
          <option value=''>choose one ... </option>
          {artists.map((track) => (
            <option key={track._id} value={track.artist_name}>
              {track.artist_name}
            </option>
          ))}
        </select>

        <label htmlFor='first'>Track</label>
        <select
          value={tracks._id}
          onChange={handleChange}
          name='first'
          id={tracks._id}
        >
          <option value=''>choose one ... </option>
          {firstArtistTracks.map((track) => (
            <option key={track._id} value={track._id}>
              {track.track_name}
            </option>
          ))}
        </select>
        <p>is sampled in this Track</p>

        <label htmlFor='secondArtist'>Artist</label>
        <select
          value={tracks._id}
          onChange={handelArtistSelection}
          name='secondArtist'
          id={tracks._id}
        >
          <option value=''>choose one ... </option>
          {artists.map((track) => (
            <option key={track._id} value={track.artist_name}>
              {track.artist_name}
            </option>
          ))}
        </select>
        <label htmlFor='second'>Track</label>
        <select
          value={tracks.track_name}
          onChange={handleChange}
          name='second'
          id={tracks._id}
        >
          <option value=''>choose one ... </option>
          {secondArtistTracks.map((track) => (
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
  margin: 1rem 0 1rem 0;

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
    font-size: 0.8rem;
    padding-left: 1rem;
    box-sizing: border-box;
    height: 1.8rem;
    color: #848484;
    :focus {
      outline: none;
    }
  }

  button:active {
    background-color: #00ce82ab;
  }

  p {
    align-self: center;
    margin: 1rem 0 0 0;
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
