import PropTypes from 'prop-types';
import { StyledButton } from './UI/Button.Styled';
export default function Button({ variant, onClick, children }) {
  return (
    <StyledButton variant={variant} onClick={onClick} type="button">
      {children}
    </StyledButton>
  );
}

Button.protoTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.string,
};
