import styled from 'styled-components'
import used_logo from '../assets/used_logo.svg'

export default function Header({ pageTitle }) {
  return (
    <StyledHeader>
      <img className='logo' src={used_logo} alt='used log' />
      <h1>{pageTitle}</h1>
    </StyledHeader>
  )
}
const StyledHeader = styled.header`
  background: var(--secondarycolor);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 3.2rem;
  justify-items: center;
  align-items: baseline;
  position: fixed;
  padding-bottom: 0.4rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  .logo {
    margin-top: 1rem;
    margin-left: 1.8rem;
    max-width: 13vw;
    justify-self: start;
  }
  h1 {
    font-size: 0.7rem;
    color: var(--darkgrey);
  }
`
