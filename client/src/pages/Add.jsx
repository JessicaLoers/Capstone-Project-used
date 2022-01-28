import styled from 'styled-components'
import { useState } from 'react'
import AddTrackForm from '../components/AddTrackForm'
import AddArtistForm from '../components/AddArtistForm'
import AddSamplePair from '../components/AddSamplePair'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Add({
  artists,
  onAddArtist,
  onAddSamplePair,
  onAddTrack,
  tracks,
  user,
}) {
  const [isTrackBtnActive, setIsTrackBtnActive] = useState(false)
  const [isSampleBtnActive, setIsSampleBtnActive] = useState(false)
  const [isArtistBtnActive, setIsArtistBtnActive] = useState(false)

  return (
    <>
      {' '}
      <Wrapper>
        <Header pageTitle={'Add'} />
        <h1>What you'd like to do, dear {user.first_name}?</h1>
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
              artists={artists}
              onAddTrack={onAddTrack}
              tracks={tracks}
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
              artists={artists}
              onAddArtist={onAddArtist}
              tracks={tracks}
              user={user}
            />
          ) : (
            ''
          )}
        </section>
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.section`
  margin: 5rem 3rem 7rem 3rem;
  button {
    margin-top: 1rem;
    cursor: pointer;
    height: 2rem;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    align-self: center;
  }

  h1 {
    text-align: center;
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
  border: 1px solid var(--cardtrack);
  color: var(--darkgrey);
  width: 12rem;
  :active {
    background-color: #00ce82ab;
  }
`

const BtnShowFormSamples = styled.button`
  background-color: var(--secondarycolor);
  border: 1px solid var(--secondarycolor);
  color: var(--darkgrey);
  width: 12rem;
  :active {
    background-color: #d3a8b6f8;
  }
`

const BtnShowFormAddArtist = styled.button`
  background-color: var(--cardartist);
  border: 1px solid var(--cardartist);
  color: var(--darkgrey);
  width: 12rem;
  :active {
    background-color: #5b82eeb2;
  }
`
