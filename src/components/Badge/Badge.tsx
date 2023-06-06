// src/components/Badge/Badge.tsx
import React from "react";
import { BadgeWrapper } from "./Badge.styles";

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = "#000000" }) => {
  return <BadgeWrapper color={color}>{text}</BadgeWrapper>;
};

export default Badge;
