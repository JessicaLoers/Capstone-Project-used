import styled from 'styled-components'
import { useState } from 'react'

import { isArtistValid } from '../lib/form-validation'
import TextInput from './FormInputs/TextInput'
import InputTextAreaInput from './FormInputs/TextAreaInput'

import dead_melody from '../assets/icons/dead_melody.svg'
import used_melody from '../assets/icons/used_melody.svg'

export default function AddForm({ tracks, artists, onAddArtist, user }) {
  const initialArtist = {
    artist_image: '',
    artist_name: '',
    entry_of_user: [user._id],
    fav_of_user: [],
    infos: '',
    tracks: [],
  }

  const [artist, setArtist] = useState(initialArtist)
  const [hasFormErrors, setHasFormErrors] = useState(false)
  const [hasFormSend, setHasFormSend] = useState(false)

  const handleChange = (event) => {
    let inputValue = event.target.value

    setArtist({
      ...artist,
      [event.target.name]: inputValue,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isArtistValid(artist)) {
      onAddArtist(artist)
      setHasFormErrors(false)
      setHasFormSend(true)
    } else {
      setHasFormErrors(true)
      setHasFormSend(false)
    }
  }

  return (
    <>
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
            Your artist is added.
          </p>
        </ErrorMessage>
      )}

      <AddArtistForm onSubmit={handleSubmit}>
        <TextInput
          onTextInputChange={handleChange}
          name='artist_name'
          placeholder='type in artistname ...'
          value={artist.artist_name}
        >
          Artist
        </TextInput>

        <InputTextAreaInput
          onTextInputChange={handleChange}
          name='infos'
          placeholder='type in ..'
          value={artist.infos}
        >
          Some kind words
        </InputTextAreaInput>

        <TextInput
          onTextInputChange={handleChange}
          name='artist_image'
          placeholder='insert link ...'
          value={artist.artist_image}
        >
          Cover Image
        </TextInput>

        <BtnPair>
          <button type='submit' className='addBtn'>
            Save
          </button>

          <button
            className='clearBtn'
            type='reset'
            onClick={() => {
              setArtist(initialArtist)
              //setHasFormErrors(false)
            }}
          >
            Clear
          </button>
        </BtnPair>
      </AddArtistForm>
    </>
  )
}

const ErrorMessage = styled.div`
  display: flex;
  align-items: flex-end;
  color: var(--lightgrey);
  display: flex;
  gap: 0.8rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  .melody {
    width: 4rem;
  }
`
const AddArtistForm = styled.form`
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
    font-family: 'Poppins', sans-serif;
    background-color: var(--lightgrey);
    border: 0;
    border-radius: 3px;
    padding-left: 1rem;
    box-sizing: border-box;
    height: 1.8rem;
    color: #848484;
    font-size: 0.8rem;
    margin-bottom: 7px;
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
    border: 1px solid var(--cardartist);
  }
  .clearBtn {
    border-radius: 0 50px 50px 0;
    background-color: transparent;
    color: var(--cardartist);
  }
  .addBtn {
    background-color: var(--cardartist);
    border-radius: 50px 0 0 50px;
  }
`
