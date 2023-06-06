// src/components/Select/Select.tsx
import React from "react";
import { SelectWrapper } from "./Select.styles";

interface SelectProps {
  options: string[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => (
  <SelectWrapper onChange={onChange}>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </SelectWrapper>
);

export default Select;
