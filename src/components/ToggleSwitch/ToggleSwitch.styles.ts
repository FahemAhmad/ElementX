// src/components/ToggleSwitch/ToggleSwitch.styles.ts
import styled from "styled-components";

export const ToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
