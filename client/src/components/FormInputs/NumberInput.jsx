function NumberInput({ name, value, onNumberInputChange, children }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="number"
        id={name}
        name={name}
        onChange={onNumberInputChange}
        value={value}
        min="1900"
        max="2099"
        step="1"
      />
    </>
  );
}

export default NumberInput;
