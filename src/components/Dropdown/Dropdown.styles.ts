// src/components/Dropdown/Dropdown.styles.ts
import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: white;
  border: 1px solid #ccc;
  border-top: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
