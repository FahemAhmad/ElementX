// src/components/Select/Select.styles.ts
import styled from "styled-components";

export const SelectWrapper = styled.select`
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  font-size: 1em;
`;
