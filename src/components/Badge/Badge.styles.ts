// src/components/Badge/Badge.styles.ts
import styled from "styled-components";

interface BadgeWrapperProps {
  color: string;
}

export const BadgeWrapper = styled.span<BadgeWrapperProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${({ color }) => color};
  border-radius: 4px;
`;
