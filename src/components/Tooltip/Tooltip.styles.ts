// src/components/Tooltip/Tooltip.styles.ts
import styled from "styled-components";

interface TooltipContentProps {
  position: "top" | "bottom" | "left" | "right";
}

export const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) => theme.tooltip.backgroundColor};
  color: ${({ theme }) => theme.tooltip.textColor};
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 14px;
  white-space: nowrap;

  ${({ position }) => {
    switch (position) {
      case "top":
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4px;
        `;
      case "bottom":
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 4px;
        `;
      case "left":
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 4px;
        `;
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 4px;
        `;
      default:
        return "";
    }
  }}
`;
