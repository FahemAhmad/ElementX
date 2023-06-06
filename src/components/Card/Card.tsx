// src/components/Card/Card.tsx
import React from "react";
import { CardWrapper } from "./Card.styles";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <CardWrapper>{children}</CardWrapper>
);

export default Card;
