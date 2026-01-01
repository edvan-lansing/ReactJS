import React from "react";
import { SelectGroup, SelectLabel, StyledSelect, SelectWrapper } from "./styles";

export const Select = ({
  label,
  name,
  value,
  onChange,
  required,
  options = []
}) => (
  <SelectGroup>
    {label && <SelectLabel htmlFor={name}>{label}</SelectLabel>}

    <SelectWrapper>
      <StyledSelect
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Selecione</option>

        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  </SelectGroup>
);