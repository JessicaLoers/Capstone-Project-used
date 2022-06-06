import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;
  top: -30px;
  right: 35px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffd637;
  width: 55px;
  height: 55px;
`;

const StyledNavigation = styled.ul`
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  background: var(--secondarycolor);
  display: flex;
  justify-content: space-around;
  position: fixed;
  height: 3.8em;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1rem;

  li a.active {
    svg {
      fill: var(--lightgrey);
      transform: scale(1.3);
    }
  }
`;

export { Circle, StyledNavigation };
