import styled from 'styled-components';

const StyledHeader = styled.header`
  background: var(--secondarycolor);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 3.2rem;
  justify-items: center;
  align-items: baseline;
  position: fixed;
  padding-bottom: 0.4rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  img {
    margin-top: 1rem;
    margin-left: 1.8rem;
    max-width: 13vw;
    justify-self: start;
  }
  h1 {
    font-size: 0.7rem;
    color: var(--darkgrey);
  }
`;

export { StyledHeader };
