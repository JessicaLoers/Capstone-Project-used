import styled from 'styled-components';
import { useState } from 'react';
import AddTrackForm from '../components/AddTrackForm';
import AddArtistForm from '../components/AddArtistForm';
import AddSamplePair from '../components/AddSamplePair';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Add({
  artists,
  onAddArtist,
  onAddSamplePair,
  onAddTrack,
  tracks,
  user,
}) {
  const [isTrackBtnActive, setIsTrackBtnActive] = useState(false);
  const [isSampleBtnActive, setIsSampleBtnActive] = useState(false);
  const [isArtistBtnActive, setIsArtistBtnActive] = useState(false);

  return (
    <>
      <Wrapper>
        <Header pageTitle={'Add'} />
        <h1>What you&rsquo;d like to do, dear {user.first_name}?</h1>
        <section>
          <div data-testid="open-add-sample-btn">
            <Button
              onClick={() => {
                setIsSampleBtnActive(!isSampleBtnActive);
              }}
              variant="sample"
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
        <section>
          <div data-testid="open-add-track-btn">
            <Button
              onClick={() => {
                setIsTrackBtnActive(!isTrackBtnActive);
              }}
              variant="track"
            >
              {isTrackBtnActive ? <span>close</span> : <span>Add Track</span>}
            </Button>
          </div>
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

        <section>
          <div data-testid="open-add-artist-btn">
            <Button
              onClick={() => {
                setIsArtistBtnActive(!isArtistBtnActive);
              }}
              variant="artist"
            >
              {isArtistBtnActive ? <span>close</span> : <span>Add Artist</span>}
            </Button>
          </div>
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
  );
}

const Wrapper = styled.section`
  margin: 5rem 3rem 9rem 3rem;
  div {
    align-self: center;
  }
  h1 {
    text-align: center;
  }
  section {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
`;
