// src/components/Alert/Alert.tsx
import React from "react";
import { AlertWrapper } from "./Alert.styles";

interface AlertProps {
  type: "success" | "error" | "info";
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => (
  <AlertWrapper type={type}>
    {message}
    {onClose && <button onClick={onClose}>Close</button>}
  </AlertWrapper>
);

export default Alert;
