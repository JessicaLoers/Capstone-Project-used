import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledCardWrapper = styled.article`
  ${({ variant }) => {
    if (variant === 'artist') {
      return css`
        background-color: var(--cardartist);
        border: 1px solid var(--cardartist);
      `;
    } else if (variant == 'track') {
      return css`
        background-color: var(--cardtrack);
        border: 1px solid var(--cardtrack);
      `;
    }
  }};
  border-radius: 0 5px 5px 0;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 2fr 3fr 0.5fr;
  align-items: center;
  margin-bottom: 5px;
  padding: 5px 5px 5px 0;
  width: 80vw;
`;
const StyledCardImage = styled.img`
  border-radius: ${({ variant }) => (variant === 'artist' ? '100px' : 'none')};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  filter: grayscale(var(--value, 100%));
  height: 20vw;
  justify-self: center;
  object-fit: cover;
  width: 20vw;
`;

const StyledCardLink = styled(Link)`
  cursor: pointer;
  display: flex;
`;

const StyledArtistLink = styled(Link)`
  color: var(--lightgrey);
  font-weight: 500;
  cursor: pointer;
`;

const StyledTrackDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export {
  StyledCardWrapper,
  StyledCardImage,
  StyledCardLink,
  StyledArtistLink,
  StyledTrackDetails,
};
