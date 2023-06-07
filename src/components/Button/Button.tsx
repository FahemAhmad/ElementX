import React from "react";
import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  ariaPressed?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  ariaPressed = false,
  ...props
}) => (
  <ButtonWrapper
    onClick={onClick}
    role="button"
    aria-pressed={ariaPressed}
    {...props}
  >
    {children}
  </ButtonWrapper>
);

export default Button;
