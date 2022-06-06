import SVG from './Svg.jsx';
import { NavLink } from 'react-router-dom';
import { Circle, StyledNavigation } from './UI/Footer.Styled';

export default function Footer() {
  return (
    <footer>
      <StyledNavigation>
        <li>
          <NavLink to="/">
            <SVG variant="home" color="#C49BA8" />
          </NavLink>
        </li>

        <li>
          <NavLink data-testid="search-nav-btn" to="/search">
            <SVG variant="search" color="#C49BA8" />
          </NavLink>
        </li>

        <li>
          <NavLink data-testid="profile-nav-btn" to="/profile">
            <SVG variant="profile" color="#C49BA8" />
          </NavLink>
        </li>

        <li>
          <NavLink to="/add">
            <Circle>
              <SVG variant="add" color="#F8F8F8" size="30px" />
            </Circle>
          </NavLink>
        </li>
      </StyledNavigation>
    </footer>
  );
}
