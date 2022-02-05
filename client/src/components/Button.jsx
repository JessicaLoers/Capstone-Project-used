import PropTypes from 'prop-types';
import styled from 'styled-components';
export default function Button({
  backgroundColor,
  className,
  onClick,
  color,
  children,
}) {
  return (
    <Btn
      backgroundColor={backgroundColor}
      onClick={onClick}
      className={className}
      color={color}
      type="button"
    >
      {children}
    </Btn>
  );
}

Button.protoTypes = {
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.string,
};

const Btn = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'none'};
  color: ${(props) => (props.color ? props.color : '#333333')};
  width: 12rem;
  border: none;
  margin-top: 1rem;
  cursor: pointer;
  height: 2rem;
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  align-self: center;
`;
