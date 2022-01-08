import PropTypes from 'prop-types'
import styled from 'styled-components'

export default function Header({ isStatic }) {
  return (
    <StyledHeader isStatic={isStatic}>
   <h3>Logo</h3>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #5b81ee;
  display: flex;
  flex-direction: row;
  justify-content: left;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;

Header.propTypes = {
  isStatic: PropTypes.bool,
};