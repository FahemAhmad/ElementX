// src/components/Alert/Alert.styles.ts
import styled, { css } from "styled-components";

interface AlertWrapperProps {
  type: "success" | "error" | "info";
}

const successStyles = css`
  background-color: #d4edda;
  color: #155724;
`;

const errorStyles = css`
  background-color: #f8d7da;
  color: #721c24;
`;

const infoStyles = css`
  background-color: #cce5ff;
  color: #004085;
`;

export const AlertWrapper = styled.div<AlertWrapperProps>`
  padding: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
  font-size: 1em;
  ${({ type }) => {
    switch (type) {
      case "success":
        return successStyles;
      case "error":
        return errorStyles;
      case "info":
        return infoStyles;
      default:
        return "";
    }
  }}
`;
