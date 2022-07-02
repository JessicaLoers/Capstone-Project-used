import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import favlabel from '../assets/favLabel.svg';

export default function Artist({ artists, tracks, onAddToFavourites, user }) {
  const { artist_name } = useParams();

  const thisArtist = artists.find(
    (artist) => artist.artist_name === artist_name
  );
  const thisArtistTrack = tracks.filter((track) =>
    track.artist.includes(thisArtist?.artist_name)
  );
  return (
    <>
      <CardWrapper>
        <Header pageTitle={'Artist'} />
        <ImageContainer>
          <h1>{thisArtist?.artist_name}</h1>
          <ArtistImage src={thisArtist?.artist_image} />
        </ImageContainer>
        <StyledFavouriteIcon
          onClick={() => onAddToFavourites(thisArtist, user)}
          className="favIcons"
        >
          <img data-testid="favourite-link" src={favlabel} alt="" />
          {thisArtist?.fav_of_user.includes(user._id) ? <span /> : ''}
        </StyledFavouriteIcon>
        <Info>{thisArtist?.infos}</Info>
        {thisArtistTrack?.map((track) => (
          <Card
            key={track._id}
            track={track.track_name}
            year={track.year}
            image={track.cover_image}
            name={track.artist}
            variant="track"
          />
        ))}
      </CardWrapper>
      <Footer />
    </>
  );
}

const StyledFavouriteIcon = styled.div`
  img {
    position: absolute;
    right: 0;
    z-index: 100;
  }
  span {
    background-color: #ff1d1d;
    border-radius: 50%;
    height: 34px;
    margin-bottom: 8px;
    position: absolute;
    right: 0;
    width: 48px;
    z-index: 90;
  }
`;

const ImageContainer = styled.section`
  position: relative;
  h1 {
    bottom: 0;
    display: flex;
    font-size: 2.6rem;
    font-weight: 800;
    left: 1rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    position: absolute;
    z-index: 90;
  }
`;
const ArtistImage = styled.img`
  filter: grayscale(var(--value, 100%));
  --value: 100%;
  height: 40vh;
  justify-self: center;
  object-fit: cover;
  width: 100vw;
`;
const CardWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-bottom: 15rem;
  margin-top: 3.2rem;
`;
const Info = styled.section`
  font-size: 0.8rem;
  margin: 1rem;
  width: 80vw;
`;
