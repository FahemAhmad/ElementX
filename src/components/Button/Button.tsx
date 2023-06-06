// src/components/Button/Button.tsx
import React from "react";
import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  ariaPressed?: boolean;
}

const Button: React.FC<ButtonProps> = (
  { children, onClick, ariaPressed = false },
  props
) => (
  <ButtonWrapper
    disabled={props.disabled}
    onClick={onClick}
    role="button"
    aria-pressed={ariaPressed}
  >
    {children}
  </ButtonWrapper>
);

export default Button;
