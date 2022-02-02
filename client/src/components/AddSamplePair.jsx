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

  console.log(pair?.first)

  return (
    <div>
      {hasFormErrors && (
        <Message data-testid='error-message'>
          <img src={dead_melody} alt='' className='melody' />

          <p>
            <strong>Oh no, {user.first_name}! </strong>
            Select two different tracks.
          </p>
        </Message>
      )}
      {hasFormSend && (
        <Message data-testid='send-message'>
          <img src={used_melody} alt='' className='melody' />

          <p>
            <strong>Yes, {user.first_name}! </strong>
            Your Sample is added.
          </p>
        </Message>
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
        <p>contains samples of this Track</p>

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
            data-testid='add-sample-btn'
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
  margin: 1rem 0 1rem 0;
  label {
    display: block;
    font-size: 0.8rem;
    padding: 0.4em 1rem;
    text-align: left;
  }
  input,
  select,
  option {
    background-color: var(--lightgrey);
    border-radius: 3px;
    border: 0;
    box-sizing: border-box;
    color: #848484;
    font-size: 0.8rem;
    height: 1.8rem;
    padding-left: 1rem;
    :focus {
      outline: none;
    }
  }
  button:active {
    background-color: #d3a8b6f8;
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
    border: 1px solid var(--secondarycolor);
    color: var(--darkgrey);
    color: var(--darkgrey);
    width: 6rem;
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
const Message = styled.div`
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
