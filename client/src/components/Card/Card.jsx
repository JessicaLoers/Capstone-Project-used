//import PropTypes from 'prop-types';
import SVG from '../Svg';
import {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardLink,
  StyledArtistLink,
  StyledTrackDetails,
} from './Card.Styled';

function Card({ name, image, track, year, variant }) {
  return (
    <StyledCardWrapper data-testid={variant} variant={variant}>
      <StyledCardImage variant={variant} src={image} />
      {variant === 'artist' && <h3>{name}</h3>}
      {variant == 'track' && (
        <StyledTrackDetails>
          <p>{track}</p>
          <StyledArtistLink to={`/artist/${name}`}>
            <p>{name}</p>
          </StyledArtistLink>
          <p>{year}</p>
        </StyledTrackDetails>
      )}
      <StyledCardLink
        to={variant == 'artist' ? `/artist/${name}` : `/track/${track}`}
      >
        <SVG variant="arrow" color="#f8f8f8" size="35px" />
      </StyledCardLink>
    </StyledCardWrapper>
  );
}
export default Card;

// Card.propTypes = {
//   artist_name: PropTypes.string,
//   artist_image: PropTypes.string,
// };
