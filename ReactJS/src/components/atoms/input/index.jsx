import React from "react";
import { InputGroup, InputLabel, StyledInput } from "./styles";
import InputMask from "react-input-mask";

export function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
  mask,
  disabled
}) {
  return (
    <InputGroup>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}

      {mask ? (
        <InputMask
          mask={mask}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {(inputProps) => (
            <StyledInput
              {...inputProps}
              id={name}
              name={name}
              type={type}
              required={required}
              placeholder={placeholder}
            />
          )}
        </InputMask>
      ) : (
        <StyledInput
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </InputGroup>
  );
};
