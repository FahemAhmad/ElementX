// src/components/Avatar/Avatar.styles.ts
import styled from "styled-components";

interface AvatarWrapperProps {
  size: number;
}

export const AvatarWrapper = styled.img<AvatarWrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;
