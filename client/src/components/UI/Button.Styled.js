import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  align-self: center;
  border: none;
  border-radius: 50px;
  color: var(--primarycolor);
  cursor: pointer;
  font-size: 0.9rem;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.4rem 1rem;
  width: 12rem;
  ${({ variant = 'sample' }) => {
    if (variant === 'sample') {
      return css`
        background: #f7c4d4;
      `;
    } else if (variant === 'track') {
      return css`
        background: #00ce82;
      `;
    } else if (variant === 'artist') {
      return css`
        background: #5b81ee;
      `;
    }
  }}
`;

export { StyledButton };
