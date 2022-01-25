import styled from 'styled-components'

import { useState } from 'react'

import AddTrackForm from '../components/AddTrackForm'
import AddSamplePair from '../components/AddSamplePair'

export default function Add({
  tracks,
  artists,
  onAddTrack,
  user,
  onAddSamplePair,
}) {
  const [isBtnActive, setIsBtnActive] = useState(false)
  const [isSampleBtnActive, setIsSampleBtnActive] = useState(false)

  return (
    <Wrapper>
      <section className='section-wrapper'>
        <BtnShowFormSamples
          type='button'
          onClick={() => setIsSampleBtnActive(!isSampleBtnActive)}
          className={isSampleBtnActive ? 'inactive' : 'active'}
        >
          I'd like to add a sample
        </BtnShowFormSamples>

        {isSampleBtnActive ? (
          <AddSamplePair
            tracks={tracks}
            artists={artists}
            onAddSamplePair={onAddSamplePair}
          />
        ) : (
          ''
        )}
      </section>
      <section className='section-wrapper'>
        <BtnShowFormAddTrack
          type='button'
          onClick={() => setIsBtnActive(!isBtnActive)}
          className={isBtnActive ? 'inactive' : 'active'}
        >
          I'd like to add a track
        </BtnShowFormAddTrack>
        {isBtnActive ? (
          <AddTrackForm
            tracks={tracks}
            artists={artists}
            onAddTrack={onAddTrack}
            user={user}
          />
        ) : (
          ''
        )}
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem 3rem 0 3rem;

  button {
    margin-top: 1rem;
  }

  .section-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`

const BtnShowFormAddTrack = styled.button`
  background-color: var(--cardtrack);
  border: 1px solid var(--cardtrack);
  align-self: center;
  border: none;
  cursor: pointer;
  color: var(--darkgrey);
  height: 2rem;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  width: 12rem;

  border-radius: 50px;

  :active {
    background-color: #00ce82ab;
  }
  :focus {
    background-color: #00ce82ab;
  }
`

const BtnShowFormSamples = styled.button`
  background-color: var(--secondarycolor);
  border: 1px solid var(--secondarycolor);
  align-self: center;
  border: none;
  cursor: pointer;
  color: var(--darkgrey);
  height: 2rem;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  width: 12rem;

  border-radius: 50px;

  :active {
    background-color: #d3a8b6f8;
  }
  :focus {
    background-color: #d3a8b6f8;
  }
`
