import styled from 'styled-components'

export default function Header({ isStatic }) {
  return (
    <StyledHeader isStatic={isStatic}>
      <h3>Logo</h3>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background: var(--secondarycolor);
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
`
