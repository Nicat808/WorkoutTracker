const Input = ({
  placeholder,
  value,
  onChangeHandler,
  onFocusHandler,
  onBlurHandler,
}) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChangeHandler}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
    />
  );
};

export default Input;
