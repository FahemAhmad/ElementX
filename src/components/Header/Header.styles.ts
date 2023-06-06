// src/components/Header/Header.styles.ts
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 1em;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  font-size: 1.5em;
  text-align: center;
`;
