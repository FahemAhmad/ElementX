// src/components/Tabs/Tabs.tsx
import React, { useState } from "react";
import { TabsWrapper, TabList, Tab, TabPanels, TabPanel } from "./Tabs.styles";

interface TabsProps {
  children: React.ReactNode;
}

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> & {
  Tab: React.FC<TabProps>;
} = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(
    children
  ) as React.ReactElement<TabProps>[];

  return (
    <TabsWrapper>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            active={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={index} active={index === activeTab}>
            {tab.props.children}
          </TabPanel>
        ))}
      </TabPanels>
    </TabsWrapper>
  );
};

Tabs.Tab = ({ label, children }) => <React.Fragment>{children}</React.Fragment>;

export default Tabs;
