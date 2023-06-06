// src/components/Input/Input.tsx
import React from "react";
import { InputWrapper } from "./Input.styles";

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => <InputWrapper {...props} />;

export default Input;
