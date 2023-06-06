// src/components/Accordion/Accordion.styles.ts
import styled from "styled-components";

export const AccordionWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const AccordionHeader = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  padding: 1rem;
  cursor: pointer;
  font-weight: bold;
`;

export const AccordionContent = styled.div`
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.secondaryColor};
  padding: 1rem;
`;
