import styled from 'styled-components';
import { useState } from 'react';
import { isArtistValid } from '../lib/form-validation';
import TextInput from './FormInputs/TextInput';
import InputTextAreaInput from './FormInputs/TextAreaInput';
import dead_melody from '../assets/icons/dead_melody.svg';
import used_melody from '../assets/icons/used_melody.svg';

export default function AddForm({ onAddArtist, user }) {
  const initialArtist = {
    artist_image: '',
    artist_name: '',
    entry_of_user: [user._id],
    fav_of_user: [],
    infos: '',
    tracks: [],
  };

  const [artist, setArtist] = useState(initialArtist);
  const [hasFormErrors, setHasFormErrors] = useState(false);
  const [hasFormSend, setHasFormSend] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;

    setArtist({
      ...artist,
      [event.target.name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isArtistValid(artist)) {
      onAddArtist(artist);
      setHasFormErrors(false);
      setHasFormSend(true);
    } else {
      setHasFormErrors(true);
      setHasFormSend(false);
    }
  };

  return (
    <>
      {hasFormErrors && (
        <Message data-testid="error-message">
          <img src={dead_melody} alt="" className="melody" />

          <p>
            <strong>Oh no, {user.first_name}! </strong>
            Check if all fields are correctly filled.
          </p>
        </Message>
      )}
      {hasFormSend && (
        <Message data-testid="send-message">
          <img src={used_melody} alt="" className="melody" />

          <p>
            <strong>Yes, {user.first_name}! </strong>
            Your artist is added.
          </p>
        </Message>
      )}

      <AddArtistForm onSubmit={handleSubmit}>
        <TextInput
          onTextInputChange={handleChange}
          name="artist_name"
          placeholder="type in artistname ..."
          value={artist.artist_name}
        >
          Artist
        </TextInput>

        <InputTextAreaInput
          onTextInputChange={handleChange}
          name="infos"
          placeholder="type in .."
          value={artist.infos}
        >
          Some kind words
        </InputTextAreaInput>

        <TextInput
          onTextInputChange={handleChange}
          name="artist_image"
          placeholder="https://... .png or .jpg"
          value={artist.artist_image}
        >
          Artist Image
        </TextInput>

        <BtnPair>
          <button data-testid="add-artist-btn" type="submit" className="addBtn">
            Save
          </button>

          <button
            className="clearBtn"
            type="reset"
            onClick={() => {
              setArtist(initialArtist);
            }}
          >
            Clear
          </button>
        </BtnPair>
      </AddArtistForm>
    </>
  );
}

const Message = styled.div`
  align-items: flex-end;
  color: var(--lightgrey);
  display: flex;
  display: flex;
  gap: 0.8rem;
  margin: 0 0 1rem;
  padding: 0.5rem;
  .melody {
    width: 4rem;
  }
`;
const AddArtistForm = styled.form`
  display: flex;
  flex-direction: column;
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
    font-family: 'Poppins', sans-serif;
    font-size: 0.7rem;
    height: 1.8rem;
    margin-bottom: 7px;
    padding-left: 1rem;
    :focus {
      outline: none;
    }
  }
  button:active {
    background-color: #5b82eeb2;
  }
`;
const BtnPair = styled.div`
  align-self: center;
  display: flex;
  margin-top: 1rem;
  button {
    border: 1px solid var(--cardartist);
    color: var(--darkgrey);
    color: var(--darkgrey);
    width: 6rem;
    margin-top: 1rem;
    cursor: pointer;
    height: 2rem;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
  }
  .clearBtn {
    background-color: transparent;
    border-radius: 0 50px 50px 0;
    color: var(--cardartist);
  }
  .addBtn {
    background-color: var(--cardartist);
    border-radius: 50px 0 0 50px;
  }
`;
