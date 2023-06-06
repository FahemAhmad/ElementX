// src/components/Footer/Footer.styles.ts
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  padding: 1rem;
  text-align: center;
`;
