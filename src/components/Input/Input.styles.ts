// src/components/Input/Input.styles.ts
import styled from "styled-components";

export const InputWrapper = styled.input`
  padding: 0.5em;
  font-size: 1em;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;

  &:focus {
    outline-color: ${(props) => props.theme.primaryColor};
  }
`;
