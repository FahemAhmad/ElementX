// src/components/ProgressBar/ProgressBar.styles.ts
import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 4px;
`;

interface ProgressProps {
  value: number;
}

export const Progress = styled.div<ProgressProps>`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
`;
