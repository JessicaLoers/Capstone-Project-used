import styled from 'styled-components';

export default function InputTextAreaInput({
  name,
  value,
  onTextInputChange,
  placeholder,
  children,
}) {
  return (
    <>
      <StyledComp>
        <label htmlFor={name}>{children}</label>
        <textarea
          id={name}
          name={name}
          onChange={onTextInputChange}
          placeholder={placeholder}
          value={value}
          rows="3"
          cols="48"
        />
      </StyledComp>
    </>
  );
}

const StyledComp = styled.div`
  display: flex;
  flex-direction: column;
  label {
    display: block;
    padding: 0.4em 1rem;
    text-align: left;
    font-size: 0.8rem;
  }
  textarea {
    font-size: 0.7rem;
    font-family: 'Poppins', sans-serif;
    background-color: var(--lightgrey);
    border: 0;
    border-radius: 3px;
    padding-left: 1rem;
    box-sizing: border-box;
    color: #848484;
    margin-bottom: 0;

    :focus {
      outline: none;
    }
  }
`;
