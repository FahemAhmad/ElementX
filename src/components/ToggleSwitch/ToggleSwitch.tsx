// src/components/ToggleSwitch/ToggleSwitch.tsx
import React from "react";
import {
  ToggleWrapper,
  ToggleInput,
  ToggleSlider,
} from "./ToggleSwitch.styles";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <ToggleWrapper>
      <ToggleInput
        type="checkbox"
        checked={checked}
        onChange={handleToggleChange}
      />
      <ToggleSlider />
    </ToggleWrapper>
  );
};

export default ToggleSwitch;
