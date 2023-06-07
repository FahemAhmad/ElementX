// .storybook/preview.tsx
import { ThemeProvider } from "styled-components";
import themes from "../src/themes/index";
import { themeItems, ThemeName } from "./themeConfig";
import React from "react";

// Define a new global type for the theme
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "professional",
    toolbar: {
      icon: "box",
      // Use themeItems from themeConfig
      items: themeItems,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const themeName = context.globals.theme as ThemeName;
    const theme = themes[themeName];
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  backgrounds: {
    default: "Default theme",
    values: [{ name: "Default theme", value: "#ffffff" }],
  },
  controls: {
    expanded: false,
    hideNoControlsWarning: true,
  },
  options: {
    storySort: {
      order: ["Intro", "Components"],
    },
  },
};
