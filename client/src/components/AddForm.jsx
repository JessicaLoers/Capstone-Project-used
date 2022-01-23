import styled from 'styled-components'
import { useState } from 'react'

import TextInput from './FormInputs/TextInput'
import NumberInput from './FormInputs/NumberInput'
import SelectInput from './FormInputs/SelectInput'

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
    onAddTrack(track, user)
    console.log(track, user)
  }

  return (
    <TrackFormWrapper>
      <FormSampled onSubmit={handleSubmit}>
        <div>
          <label htmlFor='artist'>choose</label>
          <select
            value={track.artist}
            onChange={handleChange}
            name='artist'
            id={tracks._id}
          >
            <option value=''>choose artist</option>
            {artists.map((artist) => (
              <option key={artist._id} value={artist.artist_name}>
                {artist.artist_name}
              </option>
            ))}
          </select>
        </div>

        <TextInput
          onTextInputChange={handleChange}
          name='track_name'
          autoComplete='off'
          placeholder='trackname ...'
          value={track.track_name}
        >
          trackname
        </TextInput>

        <TextInput
          onTextInputChange={handleChange}
          name='cover_image'
          autoComplete='off'
          placeholder='insert image link'
          value={track.cover_image}
        >
          Cover Image
        </TextInput>
        <TextInput
          onTextInputChange={handleChange}
          name='video_id'
          autoComplete='off'
          placeholder='insert youtube link'
          value={track.video_id}
        >
          Youtube Video
        </TextInput>
        <NumberInput
          name='year'
          value={track.year}
          onNumberInputChange={handleChange}
        >
          year
        </NumberInput>
        <div>
          <button type='submit'>Add Track</button>
          {/* Optional */}
          <button
            type='reset'
            onClick={() => {
              setTrack(initialTrack)
              //setHasFormErrors(false)
            }}
          >
            Reset
          </button>
        </div>
      </FormSampled>
    </TrackFormWrapper>
  )
}

// ---> some styling

const SearchBarWrapperStyled = styled.div`
  margin-top: 3rem;
`
const TrackFormWrapper = styled.section`
  margin: 3rem;
`
const FormSampled = styled.form`
  background: var(--secondary-bg);
  padding: 0.7rem 0.5rem 1.2rem;
  border-radius: 3px;

  label {
    display: block;
    font-weight: bold;
  }
  input,
  select {
    padding: 0.25rem;
    margin: 0.5rem 0 1rem;
  }
  button:first-child {
    margin-right: 2%;
  }
  button:nth-child(even) {
    background: transparent;
  }
`
const ErrorMessage = styled.div`
  align-items: center;
  background: var(--warning);
  border-radius: 3px;
  color: var(--secondary-font);
  display: flex;
  gap: 2.5rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  div {
    font-size: 2.5rem;
    position: relative;
    transition: all 0.5s;
  }
  div:hover {
    transform: rotateZ(20deg);
  }
  div.bubble {
    font-size: 3rem;
    position: absolute;
    top: -17px;
    right: -38px;
  }
`
