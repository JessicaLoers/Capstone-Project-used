import CardTrack from './CardTrack'
import CardArtist from './CardArtist'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function SearchBar({
  artists,
  tracks,
  onTrackRender,
  onArtistRender,
}) {
  const [searchWord, setSearchWord] = useState('')
  const [isBtnActive, setIsBtnActive] = useState(false)

  // useEffect(async () => {
  //   await onArtistRender
  //   setIsBtnActive
  // }, [artists])
  // useEffect(async () => {
  //   await onTrackRender
  // }, [tracks])

  const handleChange = (event) => {
    let inputValue = event.target.value
    setSearchWord(inputValue)
  }
  const sortedArtistNames = artists.sort((a, b) => {
    if (a.artist_name < b.artist_name) return -1
    return 1
  })
  const sortedTrackNames = tracks.sort((a, b) => {
    if (a.track_name < b.track_name) return -1
    return 1
  })

  const searchedArtist = sortedArtistNames.filter((artist) =>
    searchWord !== '' && artist.artist_name
      ? artist.artist_name.toLowerCase().includes(searchWord.toLowerCase())
      : true
  )
  const searchedTrack = sortedTrackNames.filter((track) =>
    searchWord !== '' && track.track_name
      ? track.track_name.toLowerCase().includes(searchWord.toLowerCase())
      : true
  )

  return (
    <WrapperStyled>
      <SearchBarWrapperStyled>
        <ToggleBtnPair>
          <BtnTrack
            type='button'
            onClick={() => setIsBtnActive(!isBtnActive)}
            className={isBtnActive ? 'inactive' : 'active'}
          >
            Tracks
          </BtnTrack>

          <BtnArtist
            type='button'
            onClick={() => setIsBtnActive(!isBtnActive)}
            className={!isBtnActive ? 'inactive' : 'active'}
          >
            Artist
          </BtnArtist>
        </ToggleBtnPair>
        <SearchInput>
          <input
            className='searchinput'
            type='search'
            name='search'
            id='search'
            placeholder='search ...'
            value={searchWord}
            onChange={handleChange}
          />
        </SearchInput>
      </SearchBarWrapperStyled>
      <Results>
        {isBtnActive
          ? searchedArtist?.map((artist) => (
              <div key={artist._id}>
                <CardArtist
                  artist_name={artist.artist_name}
                  artist_image={artist.artist_image}
                />
              </div>
            ))
          : searchedTrack?.map((track) => (
              <div key={track._id}>
                <CardTrack
                  track_name={track.track_name}
                  year={track.year}
                  cover_image={track.cover_image}
                  artist={track.artist}
                />
              </div>
            ))}
      </Results>
    </WrapperStyled>
  )
}

const BtnArtist = styled.button`
  border-radius: 0 50px 50px 0;
`
const BtnTrack = styled.button`
  border-radius: 50px 0 0 50px;
`
const Results = styled.div`
  margin-top: 3rem;
`
const SearchBarWrapperStyled = styled.div`
  background-color: var(--secondarycolor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  padding-bottom: 1rem;
  padding-top: 4rem;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 30;
`
const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .searchinput {
    background-color: var(--lightgrey);
    border: 0;
    border-radius: 3px;
    font-size: 0.8rem;
    padding: 1rem;
    height: 1.8rem;
    color: #848484;
    width: 60vw;
  }
  .searchinput:focus {
    outline: none;
  }
`
const ToggleBtnPair = styled.div`
  align-self: center;
  display: flex;
  margin-bottom: 1rem;
  .active {
    background: var(--primarybtn);
  }
  .inactive {
    background: var(--primarybtnlight);
    color: #918441;
  }
  button {
    border: none;
    cursor: pointer;
    color: var(--darkgrey);
    height: 2rem;
    font-size: 0.9rem;
    padding: 5px;
    width: 6rem;
  }
`
const WrapperStyled = styled.div`
  margin-bottom: 7rem;
`
