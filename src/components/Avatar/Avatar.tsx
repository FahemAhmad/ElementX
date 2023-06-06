// src/components/Avatar/Avatar.tsx
import React from "react";
import { AvatarWrapper } from "./Avatar.styles";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 40 }) => {
  return <AvatarWrapper src={src} alt={alt} size={size} />;
};

export default Avatar;
