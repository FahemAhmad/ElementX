// src/components/Button/Button.styles.ts
import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 0.5em 1em;
  font-size: 1em;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorDark};
  }

  &:disabled {
    background-color: ${(props) => props.theme.disabledColor};
    cursor: not-allowed;
  }
`;
