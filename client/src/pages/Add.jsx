import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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

  return (
    <Wrapper>
      <AddSamplePair tracks={tracks} artists={artists} />

      <button
        type='button'
        onClick={() => setIsBtnActive(!isBtnActive)}
        className={isBtnActive ? 'inactive' : 'active'}
      >
        Add Track
      </button>
      {isBtnActive ? (
        <AddTrackForm
          tracks={tracks}
          artists={artists}
          onAddTrack={onAddTrack}
          user={user}
          onAddSamplePair={onAddSamplePair}
        />
      ) : (
        ''
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem;

  button {
    margin-top: 3rem;
  }
`
