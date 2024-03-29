import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CardTrack from '../components/CardTrack';
import Header from '../components/Header';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Footer from '../components/Footer';

const favLabel = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 38"
    fill="#f7c4d4"
    height="39px"
    width="60px"
  >
    <path d="M19,0a19,19,0,0,0,0,38H59V0Zm5.26,30.2-1.88,1.69L20.5,30.18c-6.68-6.05-11.09-10-11.09-14.94a7.06,7.06,0,0,1,7.13-7.13,7.8,7.8,0,0,1,5.84,2.7,7.77,7.77,0,0,1,5.83-2.7,7.06,7.06,0,0,1,7.13,7.13C35.34,20.14,30.93,24.13,24.26,30.2Z" />
  </svg>
);

export default function Track({ tracks, user, onAddToFavourites }) {
  const { track_name } = useParams();

  const thisTrack = tracks.find((track) => track.track_name === track_name);

  const sortedTrackNames = tracks.sort((a, b) => {
    if (a.track_name < b.track_name) return -1;
    return 1;
  });

  const sampledIn = sortedTrackNames?.filter((item) =>
    item.sampled.includes(thisTrack?.track_name)
  );
  const containsSamples = sortedTrackNames?.filter((item) =>
    item.sampled_in.includes(thisTrack?.track_name)
  );

  return (
    <>
      <Header pageTitle={'Track'} />
      <StyledWrapper key={thisTrack?._id}>
        <VideoContainer>
          <YoutubeEmbed embedId={thisTrack?.video_id} />
        </VideoContainer>
        <span
          onClick={() => onAddToFavourites(thisTrack, user)}
          className="favIcons"
        >
          <i className="favLabel">{favLabel}</i>
          {thisTrack?.fav_of_user.includes(user._id) ? (
            <span className="circle"></span>
          ) : (
            <i></i>
          )}
        </span>

        <TrackInfoContainer>
          <h2>{thisTrack?.track_name}</h2>
          <p>from year {thisTrack?.year}</p>
          <ArtistLink to={`/artist/${thisTrack?.artist}`}>
            <p>by {thisTrack?.artist}</p>
          </ArtistLink>
          <p>Sampled by {thisTrack?.sampled_in.length}</p>
          <p>Contains Samples of {thisTrack?.sampled.length}</p>
        </TrackInfoContainer>
        <div>
          <h3 className="collections-headline">Sampled in:</h3>
          {sampledIn.map((track) => (
            <CardTrack
              key={track._id}
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
              tracks={tracks}
            />
          ))}
        </div>
        <div>
          <h3 className="collections-headline">Contains Samples of:</h3>
          {containsSamples.map((track) => (
            <CardTrack
              key={track._id}
              track_name={track.track_name}
              artist={track.artist}
              cover_image={track.cover_image}
              year={track.year}
            />
          ))}
        </div>
      </StyledWrapper>
      <Footer />
    </>
  );
}

const ArtistLink = styled(Link)`
  color: var(--lightgrey);
  font-weight: 500;
  cursor: pointer;
`;

const VideoContainer = styled.section`
  position: relative;
`;
const StyledWrapper = styled.div`
  background-color: var(--primarycolor);
  margin-bottom: 13rem;
  margin-top: 3.2rem;

  .collections-headline {
    font-size: 0.9rem;
    margin-left: 1rem;
    margin-bottom: 0.6rem;
    margin-top: 1.2rem;
  }
`;
const TrackInfoContainer = styled.div`
  margin: 1rem;
  p {
    font-size: 0.8rem;
  }
`;
