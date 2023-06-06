// src/components/Radio/Radio.tsx
import React from "react";
import { RadioWrapper, Label } from "./Radio.styles";

interface RadioProps {
  label: string;
  value: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ label, value, checked, onChange }) => (
  <Label>
    <RadioWrapper
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {label}
  </Label>
);

export default Radio;
