import { useState, useEffect } from 'react'
import styled from 'styled-components'

import Textinput from './Textinput'
import NumberInput from './NumberInput'
import Select from './Select'
import isTrackValid from '../lib/validation'

export default function TrackForm({ onAddTrack, addedTracks }) {
  const initialTrack = {
    track_name: '',
    artist: '',
    year: 1900,
    sampled_in: [],
    sampled: [],
    video_id: '',
    cover_image: '',
  }

  const [selectTrack, setSelectTrack] = useState([])
  const [artists, setArtists] = useState([])
  
  const [track, setTrack] = useState(initialTrack)
  const [hasFormErrors, setHasFormErrors] = useState(false)

  useEffect(() => {
    async function getArtists() {
      try {
        const response = await fetch('api/artist') // ('http://localhost:4000/api/artist')
        const artistsFromApi = await response.json()
        setArtists(artistsFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    getArtists()
  }, [])

  useEffect(() => {
    async function getSelectTrack() {
      try {
        const response = await fetch('api/track') // ('http://localhost:4000/api/artist')
        const trackFromApi = await response.json()
        setSelectTrack(trackFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    getSelectTrack()
  }, [])

  useEffect(() => {
    async function getTrack() {
      try {
        const response = await fetch('api/track') // ('http://localhost:4000/api/artist')
        const trackFromApi = await response.json()
        setTrack(trackFromApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    getTrack()
  }, [])

  const handleChange = (event) => {
    let inputValue = event.target.value

    setTrack({
      ...track,
      [event.target.name]: inputValue,
    })
  }

  // const handleSelectChangeTracks = (event) => {
  //   let inputValue = event.target.value

  //   setSelectTrack({
  //     ...selectTrack,
  //     [event.target.name]: inputValue,
  //   })
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTrack(track)
    console.log(track)
    // alert(`The name you entered was: god`)
    // if (isTrackValid(track)) {
    //   onAddTrack(track)
    //   // onAddTrack({ id: uuidv4(), ...track })
    //   // setTrack(initialTrack);
    //   setHasFormErrors(false)
    // } else {
    //   setHasFormErrors(true)
    // }
    
  }

  return (
    <TrackFormWrapper>
      {hasFormErrors && (
        <ErrorMessage>
          <p>
            <strong>Hold on!</strong>
            Take your time and check if all fields are correctly filled.
          </p>
        </ErrorMessage>
      )}

      <FormSampled onSubmit={handleSubmit}>
        <Select
          name='artist'
          value={artists.name}
          options={artists}
          onSelectChange={handleChange}
        >
          Select Artist
        </Select>

        <Select
          name='track_name'
          value={selectTrack.name}
          options={selectTrack}
          onSelectChange={handleChange}
        >
          Select Artist
        </Select>


        <Textinput
          onTextInputChange={handleChange}
          name='sampled'
          value={track.name}
        >
          contains Sample of
        </Textinput>

        {/* <NumberInput
          name='year'
          value={track.year}
          onNumberInputChange={handleChange}
        >
          year
        </NumberInput> */}

        <div>
          <button>Add Track</button>
          {/* Optional */}
          <button
            type='reset'
            onClick={() => {
              setTrack(initialTrack)
              setHasFormErrors(false)
            }}
          >
            Reset
          </button>
        </div>
        <p>
          {track.name} {artists.name}
        </p>
      </FormSampled>

      <h2> added track:</h2>
      {addedTracks.map((tracks) => (
        <p>{tracks.track_name} </p>
      ))}
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
