import TrackCard from './TrackCard'
import ArtistCard from './ArtistCard'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import icon_close from '../assets/icons/icon_close.svg'
import icon_search from '../assets/icons/icon_search.svg'

//import ButtonGroup from './ButtonGroup'

export default function SearchBar({ artists, tracks }) {
  const [searchWord, setSearchWord] = useState('')
  const [filteredTrack, setFilteredTrack] = useState('')

  const [isArtistBtnActive, setIsArtistBtnAtive] = useState(false)
  const [isTrackBtnActive, setIsTrackBtnAtive] = useState(false)

  return (
    <WrapperStyled>
      <SearchBarWrapperStyled>
        <ToggleBtnPair>
          <button
            type='button'
            onClick={() => setIsArtistBtnAtive(!isArtistBtnActive)}
          >
            artist
          </button>
          <button
            onClick={() => setIsArtistBtnAtive(!isArtistBtnActive)}
            style={{ background: isArtistBtnActive ? '' : 'red' }}
          >
            Tracks
          </button>
        </ToggleBtnPair>
        <SearchInput>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='search ...'
            value={searchWord}
            onChange={(event) => setSearchWord(event.target.value)}
          />
          {/*  --> Add on: icon_search and icon_close alias clear in input 
          <img className='closeIcon' src={icon_close} alt='close icon' />
          <img className='searchIcon' src={icon_search} alt='search icon' /> */}
        </SearchInput>
      </SearchBarWrapperStyled>

      <Results>
        {isArtistBtnActive
          ? artists
              .filter((item) =>
                item.artistName.toLowerCase().includes(searchWord.toLowerCase())
              )
              .map((artist) => (
                <div key={artist._id}>
                  <ArtistCard
                    artistName={artist.artistName}
                    artist_image={artist.artist_image}
                  />
                </div>
              ))
          : tracks
              .filter((track) =>
                searchWord !== '' && track.artist
                  ? track.artist
                      .toLowerCase()
                      .includes(searchWord.toLowerCase())
                  : true
              )
              .map((track) => track.artist)}
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

// {isArtistBtnActive &&
//   artists
//     .filter((item) => {
//       if (item === '') {
//         return item
//       } else if (
//         item.artistName
//           .toLowerCase()
//           .includes(filteredArtist.toLowerCase())
//       )
//         return item
//     })
//     .map((artist, key) => (
//       <div>
//         <ArtistCard
//           artistName={artist.artistName}
//           artist_image={artist.artist_image}
//         />
//       </div>
//     ))}
// </Results>

{
  /* <Results>
        {isArtistBtnActive
          ? artists
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
              ))
          : null}
      </Results> */
}
