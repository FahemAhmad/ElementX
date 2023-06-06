// src/components/Checkbox/Checkbox.tsx
import React from "react";
import { CheckboxWrapper, Label } from "./Checkbox.styles";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <Label>
    <CheckboxWrapper type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </Label>
);

export default Checkbox;
