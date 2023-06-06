// src/components/Tooltip/Tooltip.tsx
import React, { useState } from "react";
import { TooltipWrapper, TooltipContent } from "./Tooltip.styles";

interface TooltipProps {
  text: string;
  position: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, position, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <TooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <TooltipContent position={position}>{text}</TooltipContent>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
