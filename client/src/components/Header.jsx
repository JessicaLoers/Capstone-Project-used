import used_logo from '../assets/used_logo.svg';
import { StyledHeader } from './UI/Header.Styled';

export default function Header({ pageTitle }) {
  return (
    <StyledHeader>
      <img className="logo" src={used_logo} alt="used log" />
      <h1>{pageTitle}</h1>
    </StyledHeader>
  );
}
