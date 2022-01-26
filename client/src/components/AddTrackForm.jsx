import styled from 'styled-components'
import { useState } from 'react'

import { isTrackValid } from '../lib/form-validation'
import TextInput from './FormInputs/TextInput'
import NumberInput from './FormInputs/NumberInput'

import dead_melody from '../assets/icons/dead_melody.svg'
import used_melody from '../assets/icons/used_melody.svg'

export default function AddForm({ tracks, artists, onAddTrack, user }) {
  const initialTrack = {
    artist: '',
    cover_image: '',
    entry_of_user: [user._id],
    fav_of_user: [],
    sampled: [],
    sampled_in: [],
    track_name: '',
    video_id: '',
    year: '',
  }

  const [track, setTrack] = useState(initialTrack)
  const [hasFormErrors, setHasFormErrors] = useState(false)
  const [hasFormSend, setHasFormSend] = useState(false)

  const sortedArtistNames = artists.sort((a, b) => {
    if (a.artist_name < b.artist_name) return -1
    return 1
  })

  const handleChange = (event) => {
    let inputValue = event.target.value
    if (event.target.name === 'video_id') {
      inputValue = inputValue.split('/')[3]
    }
    setTrack({
      ...track,
      [event.target.name]: inputValue,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isTrackValid(track)) {
      onAddTrack(track)
      setHasFormErrors(false)
      setHasFormSend(true)
    } else {
      setHasFormErrors(true)
      setHasFormSend(false)
    }
  }

  return (
    <OverallWrapper>
      {hasFormErrors && (
        <ErrorMessage>
          <img src={dead_melody} alt='' className='melody' />

          <p>
            <strong>Oh no, {user.first_name}! </strong>
            Check if all fields are correctly filled.
          </p>
        </ErrorMessage>
      )}
      {hasFormSend && (
        <ErrorMessage>
          <img src={used_melody} alt='' className='melody' />

          <p>
            <strong>Yes, {user.first_name}! </strong>
            Your track is added.
          </p>
        </ErrorMessage>
      )}

      <AddTrackForm onSubmit={handleSubmit}>
        <label htmlFor='artist'>Artist</label>
        <select
          value={track.artist}
          onChange={handleChange}
          name='artist'
          id={tracks._id}
        >
          <option value=''>choose one ... </option>
          {sortedArtistNames
            .map((artist) => (
              <option key={artist._id} value={artist.artist_name}>
                {artist.artist_name}
              </option>
            ))
            .sort()}
        </select>

        <TextInput
          onTextInputChange={handleChange}
          name='track_name'
          placeholder='type in trackname ...'
          value={track.track_name}
        >
          Track
        </TextInput>
        <NumberInput
          name='year'
          value={track.year}
          onNumberInputChange={handleChange}
          placeholder=''
        >
          Release Year
        </NumberInput>

        <TextInput
          onTextInputChange={handleChange}
          name='cover_image'
          autoComplete='off'
          placeholder='https://...'
          value={track.cover_image}
        >
          Cover Image
        </TextInput>
        <TextInput
          onTextInputChange={handleChange}
          name='video_id'
          autoComplete='off'
          placeholder='https://youtube...'
          value={track.video_id}
        >
          Youtube Video
        </TextInput>

        <BtnPair>
          <button type='submit' className='addBtn'>
            Save
          </button>

          <button
            className='clearBtn'
            type='reset'
            onClick={() => {
              setTrack(initialTrack)
              setHasFormErrors(false)
            }}
          >
            Clear
          </button>
        </BtnPair>
      </AddTrackForm>
    </OverallWrapper>
  )
}

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
const OverallWrapper = styled.section``
const AddTrackForm = styled.form`
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
    height: 1.8rem;
    color: #848484;
    :focus {
      outline: none;
    }
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
