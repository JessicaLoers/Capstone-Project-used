import PropTypes from 'prop-types'
import styled from 'styled-components'
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
      type='button'
    >
      {children}
    </Btn>
  )
}

Button.protoTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.oneOf([]),
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
}

const Btn = styled.button`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'none'};
  color: ${(props) => (props.color ? props.color : '#333333')};
  width: 12rem;
  border: none;
`
