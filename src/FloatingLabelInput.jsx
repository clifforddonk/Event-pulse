import { useState } from "react";

const FloatingLabelInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  width,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="floating-label-container" style={{ width: width }}>
      <label className={`floating-label ${isFocused || value ? "active" : ""}`}>
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="input-field"
      />
    </div>
  );
};

export default FloatingLabelInput;
