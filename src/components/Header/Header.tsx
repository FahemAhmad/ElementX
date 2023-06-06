// src/components/Header/Header.tsx
import React from 'react';
import { HeaderWrapper } from './Header.styles';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);

export default Header;
