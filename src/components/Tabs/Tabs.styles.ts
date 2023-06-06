// src/components/Tabs/Tabs.styles.ts
import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.li<TabProps>`
  padding: 0.5em 1em;
  cursor: pointer;
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : "transparent"};
  color: ${({ active, theme }) => (active ? "white" : "black")};

  &:not(:last-child) {
    margin-right: 0.5em;
  }
`;

export const TabPanels = styled.div``;

interface TabPanelProps {
  active: boolean;
}

export const TabPanel = styled.div<TabPanelProps>`
  display: ${({ active }) => (active ? "block" : "none")};
`;
