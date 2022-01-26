import styled from 'styled-components'
import { useState } from 'react'
import AddTrackForm from '../components/AddTrackForm'
import AddArtistForm from '../components/AddArtistForm'
import AddSamplePair from '../components/AddSamplePair'

export default function Add({
  tracks,
  artists,
  user,
  onAddTrack,
  onAddArtist,
  onAddSamplePair,
}) {
  const [isTrackBtnActive, setIsTrackBtnActive] = useState(false)
  const [isSampleBtnActive, setIsSampleBtnActive] = useState(false)
  const [isArtistBtnActive, setIsArtistBtnActive] = useState(false)

  return (
    <Wrapper>
      <h1>What you'd like to do, {user.first_name}?</h1>
      <section className='section-wrapper'>
        <BtnShowFormSamples
          type='button'
          onClick={() => setIsSampleBtnActive(!isSampleBtnActive)}
          className={isSampleBtnActive ? 'inactive' : 'active'}
        >
          {isSampleBtnActive ? <span>close</span> : <span>Add Sample</span>}
        </BtnShowFormSamples>

        {isSampleBtnActive ? (
          <AddSamplePair
            tracks={tracks}
            artists={artists}
            onAddSamplePair={onAddSamplePair}
            user={user}
          />
        ) : (
          ''
        )}
      </section>
      <section className='section-wrapper'>
        <BtnShowFormAddTrack
          type='button'
          onClick={() => setIsTrackBtnActive(!isTrackBtnActive)}
          className={isTrackBtnActive ? 'inactive' : 'active'}
        >
          {isTrackBtnActive ? <span>close</span> : <span>Add Track</span>}
        </BtnShowFormAddTrack>
        {isTrackBtnActive ? (
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

      <section className='section-wrapper'>
        <BtnShowFormAddArtist
          type='button'
          onClick={() => setIsArtistBtnActive(!isArtistBtnActive)}
          className={isArtistBtnActive ? 'inactive' : 'active'}
        >
          {isArtistBtnActive ? <span>close</span> : <span>Add Artist</span>}
        </BtnShowFormAddArtist>
        {isArtistBtnActive ? (
          <AddArtistForm
            tracks={tracks}
            artists={artists}
            onAddArtist={onAddArtist}
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
  margin: 3rem 3rem 7rem 3rem;
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
  border: 1px solid var(--cardtrack);
  :active {
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
`

const BtnShowFormAddArtist = styled.button`
  background-color: var(--cardartist);
  border: 1px solid var(--cardartist);
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
`
