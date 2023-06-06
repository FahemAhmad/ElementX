// src/components/Sidebar/Sidebar.tsx
import React from "react";
import { SidebarWrapper } from "./Sidebar.styles";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => (
  <SidebarWrapper>{children}</SidebarWrapper>
);

export default Sidebar;
