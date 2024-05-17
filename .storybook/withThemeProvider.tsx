// .storybook/withThemeProvider.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";

const withThemeProvider = (Story, context) => {
  const theme = themes[context.globals.theme] || themes.light;
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export default withThemeProvider;
