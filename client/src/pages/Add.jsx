import styled from 'styled-components'
import { useState } from 'react'
import AddTrackForm from '../components/AddTrackForm'
import AddArtistForm from '../components/AddArtistForm'
import AddSamplePair from '../components/AddSamplePair'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

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

  const handleSampleButton = () => {
    setIsSampleBtnActive(!isSampleBtnActive)
  }

  const handleTrackButton = () => {
    setIsTrackBtnActive(!isTrackBtnActive)
  }

  const handleArtistButton = () => {
    setIsArtistBtnActive(!isArtistBtnActive)
  }

  const checkBtnState = (checkState) => {
    checkState ? 'inactive' : 'active'
  }

  return (
    <>
      <Wrapper>
        <Header pageTitle={'Add'} />
        <h1>What you'd like to do, dear {user.first_name}?</h1>
        <section className='section-wrapper'>
          <div data-testid='open-add-sample-btn'>
            <Button
              onClick={handleSampleButton}
              className={checkBtnState(isSampleBtnActive)}
              backgroundColor='#F7C4D4'
              color='#333333'
            >
              {isSampleBtnActive ? <span>Close</span> : <span>Add Sample</span>}
            </Button>
          </div>
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
            data-testid='open-add-track-btn'
            type='button'
            onClick={handleTrackButton}
            className={checkBtnState(isTrackBtnActive)}
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
            data-testid='open-add-artist-btn'
            type='button'
            onClick={handleArtistButton}
            className={checkBtnState(isArtistBtnActive)}
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
  margin: 5rem 3rem 9rem 3rem;
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
