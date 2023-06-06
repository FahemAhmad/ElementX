// src/components/Sidebar/Sidebar.styles.ts
import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 200px;
  height: 100%;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding: 1em;
`;
