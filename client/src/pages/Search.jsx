//import CardTrack from '../components/CardTrack';
import Card from '../components/Card/Card';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { searchFunction } from '../lib/searchFunction';

export default function SearchBar({ artists, tracks }) {
  const [searchWord, setSearchWord] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setSearchWord(inputValue);
  };
  const searchedArtist = searchFunction(
    artists,
    'artist_name',
    `${searchWord}`
  );
  const searchedTrack = searchFunction(tracks, 'track_name', `${searchWord}`);

  return (
    <>
      <Header pageTitle={'Search'} />
      <WrapperStyled>
        <SearchBarWrapperStyled>
          <ToggleBtnPair>
            <BtnTrack
              type="button"
              onClick={() => setIsBtnActive(!isBtnActive)}
              className={isBtnActive ? 'inactive' : 'active'}
            >
              Tracks
            </BtnTrack>
            <BtnArtist
              data-testid="search-artist-btn"
              type="button"
              onClick={() => setIsBtnActive(!isBtnActive)}
              className={!isBtnActive ? 'inactive' : 'active'}
            >
              Artist
            </BtnArtist>
          </ToggleBtnPair>
          <SearchInput>
            <input
              className="searchinput"
              type="search"
              name="search"
              id="search"
              placeholder="search ..."
              value={searchWord}
              onChange={handleChange}
            />
          </SearchInput>
        </SearchBarWrapperStyled>

        <Results>
          {isBtnActive
            ? searchedArtist?.map((artist) => (
                <div key={artist._id}>
                  <Card
                    name={artist.artist_name}
                    image={artist.artist_image}
                    variant="artist"
                  />
                </div>
              ))
            : searchedTrack?.map((track) => (
                <div key={track._id}>
                  <Card
                    track={track.track_name}
                    year={track.year}
                    image={track.cover_image}
                    name={track.artist}
                    variant="track"
                  />
                </div>
              ))}
        </Results>
      </WrapperStyled>
      <Footer />
    </>
  );
}

const BtnArtist = styled.button`
  border-radius: 0 50px 50px 0;
`;
const BtnTrack = styled.button`
  border-radius: 50px 0 0 50px;
`;
const Results = styled.div`
  margin-top: 2rem;
`;
const SearchBarWrapperStyled = styled.div`
  background-color: var(--secondarycolor);
  _box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  left: 0;
  padding-bottom: 1rem;
  padding-top: 5rem;
  position: sticky;
  right: 0;
  top: 0;
  z-index: 30;
`;
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
`;
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
`;
const WrapperStyled = styled.div`
  margin-bottom: 7rem;
`;
