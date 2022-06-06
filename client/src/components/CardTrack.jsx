import PropTypes from 'prop-types';
import SVG from './Svg.jsx';
import {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardLink,
  StyledArtistLink,
  StyledTrackDetails,
} from './UI/Card.Styled';

function CardTrack({ track_name, artist, year, cover_image }) {
  return (
    <StyledCardWrapper variant="track">
      <StyledCardImage src={cover_image} />
      <StyledTrackDetails>
        <h3>{track_name}</h3>
        <StyledArtistLink to={`/artist/${artist}`}>
          <p>{artist}</p>
        </StyledArtistLink>
        <p>{year}</p>
      </StyledTrackDetails>
      <StyledCardLink to={`/track/${track_name}`} data-testid="track-link">
        <SVG variant="arrow" color="#f8f8f8" size="35px" />
      </StyledCardLink>
    </StyledCardWrapper>
  );
}
export default CardTrack;

CardTrack.propTypes = {
  track_name: PropTypes.string,
  cover_image: PropTypes.string,
  artist: PropTypes.string,
  year: PropTypes.number,
};
