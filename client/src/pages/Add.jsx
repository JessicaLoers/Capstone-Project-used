import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useState } from 'react'

import AddTrackForm from '../components/AddTrackForm'

export default function Add({ tracks, artists, onAddTrack, user }) {
  const [isBtnActive, setIsBtnActive] = useState(false)

  return (
    <Wrapper>
      <p>Coming soon: Add Sample Pair</p>

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
        />
      ) : (
        ''
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 3rem;
`
