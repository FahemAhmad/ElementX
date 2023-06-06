// src/components/Breadcrumbs/Breadcrumbs.tsx
import React from "react";
import { BreadcrumbsWrapper, Crumb } from "./Breadcrumbs.styles";

interface BreadcrumbsProps {
  items: string[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <BreadcrumbsWrapper>
      {items.map((item, index) => (
        <Crumb key={index}>{item}</Crumb>
      ))}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
