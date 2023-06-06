// src/components/Accordion/Accordion.tsx
import React, { useState } from "react";
import {
  AccordionWrapper,
  AccordionHeader,
  AccordionContent,
} from "./Accordion.styles";

interface AccordionProps {
  title: string;
  initialOpen?: boolean;
  children?: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  initialOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={toggleAccordion}>{title}</AccordionHeader>
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;
