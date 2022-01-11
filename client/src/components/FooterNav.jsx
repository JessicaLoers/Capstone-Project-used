import styled from 'styled-components';
import { Link, Route, Routes, NavLink } from 'react-router-dom'

export default function FooterNavigation() {
    return (
      <footer>
        <Nav>
        <NavLinkStyled  to="/">
              Home
          </NavLinkStyled >
          <NavLinkStyled  to="/search">
              Search
          </NavLinkStyled >
          <NavLinkStyled  to="/profile">
              Profile
          </NavLinkStyled >
          <NavLinkStyled  to="/trackform">
              Add track
          </NavLinkStyled >
          
        </Nav>
      </footer>
    );
  }

  const Nav = styled.nav`
  background: var( --secondarycolor);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
`;

const NavLinkStyled = styled(NavLink)`
margin: 1rem;
`