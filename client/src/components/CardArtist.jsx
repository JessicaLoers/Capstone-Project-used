import PropTypes from 'prop-types';
import SVG from './Svg.jsx';
import {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardLink,
} from './UI/Card.Styled';

function CardArtist({ artist_name, artist_image }) {
  return (
    <StyledCardWrapper data-testid="artist-card" variant="artist">
      <StyledCardImage variant="artist" src={artist_image} />
      <h3>{artist_name}</h3>
      <StyledCardLink to={`/artist/${artist_name}`} data-testid="artist-link">
        <SVG variant="arrow" color="#f8f8f8" size="35px" />
      </StyledCardLink>
    </StyledCardWrapper>
  );
}
export default CardArtist;
CardArtist.propTypes = {
  artist_name: PropTypes.string,
  artist_image: PropTypes.string,
};
