import TrackCard from './TrackCard'
import ArtistCard from './ArtistCard'
import tracksdata from '../lib/tracksdata'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import icon_close from '../assets/icons/icon_close.svg'
import icon_search from '../assets/icons/icon_search.svg'

export default function SearchBar({ artists }) {
  const [trackdata, setTrackdata] = useState('')
  const [filteredArtist, setFilteredArtist] = useState('')

  return (
    <WrapperStyled>
      <SearchBarWrapperStyled>
        <ToggleBtnPair>
          <button>track</button>
          <button>artist</button>
        </ToggleBtnPair>
        <SearchInput>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='search ...'
            value={filteredArtist}
            onChange={(event) => setFilteredArtist(event.target.value)}
          />
          <img className='closeIcon' src={icon_close} alt='close icon' />
          <img className='searchIcon' src={icon_search} alt='search icon' />
        </SearchInput>
      </SearchBarWrapperStyled>
      <Results>
        {artists
          .filter((item) => {
            if (item === '') {
              return item
            } else if (
              item.artistName
                .toLowerCase()
                .includes(filteredArtist.toLowerCase())
            )
              return item
          })

          .map((artist, key) => (
            <div>
              <ArtistCard
                artistName={artist.artistName}
                artist_image={artist.artist_image}
              />
            </div>
          ))}
      </Results>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  margin-bottom: 5rem;
`
const SearchBarWrapperStyled = styled.div`
  padding-top: 1.6rem;
  padding-bottom: 1rem;
  background-color: var(--secondarycolor);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 30;
`
const ToggleBtnPair = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 1rem;
`
const Results = styled.div`
  margin-top: 3rem;
`
const SearchInput = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  .searchinput {
    background-color: var(--lightgrey);
    border: 0;
    border-radius: 2px;
    font-size: 0.9rem;
    padding: 1rem;
    height: 1.8rem;
    width: 60vw;
  }
  .searchinput:focus {
    outline: none;
  }
  .searchIcon {
    height: 24px;
    width: 24px;
    background-color: var(--lightgrey);
    display: grid;
    place-items: center;
    right: 6rem;
    bottom: 3px;
    position: absolute;
    z-index: 10;
  }
  .closeIcon {
    height: 24px;
    width: 24px;
    background-color: var(--lightgrey);
    display: grid;
    place-items: center;
    right: 6rem;
    bottom: 3px;
    position: absolute;
    z-index: 20;
  }
`
