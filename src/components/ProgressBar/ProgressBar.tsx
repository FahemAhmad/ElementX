// src/components/ProgressBar/ProgressBar.tsx
import React from "react";
import { ProgressBarWrapper, Progress } from "./ProgressBar.styles";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <ProgressBarWrapper>
      <Progress value={value} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
