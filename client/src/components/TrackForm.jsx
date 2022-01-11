import { useState, useEffect } from 'react'
import styled from 'styled-components'

import TextInput from './TextInput'
import NumberInput from './NumberInput'
import Select from './Select'
import isTrackValid from '../lib/validation'

export default function TrackForm() {
  
  return (
    <TrackFormWrapper>
      <FormSampled>
        <label>Choose</label>
        <div>
          <button>Add Track</button>
          <button>
            Reset
          </button>
        </div>
      </FormSampled>
      <h2> added track:</h2>
      <h2> artist:</h2>
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