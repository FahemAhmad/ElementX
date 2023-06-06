// src/components/Footer/Footer.tsx
import React from 'react';
import { FooterWrapper } from './Footer.styles';

interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => (
  <FooterWrapper>{children}</FooterWrapper>
);

export default Footer;
