// src/components/ThemeContext/ThemeContext.tsx
import React from "react";
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from "styled-components";
import { buildTheme } from "../../utils";
import PropTypes from "prop-types";

interface ThemeContextProps {
  theme: DefaultTheme;
  children: React.ReactNode;
}

const mergeThemes = (parentTheme: DefaultTheme, childTheme: DefaultTheme) => {
  return { ...parentTheme, ...childTheme };
};

export const ThemeContext: React.FC<ThemeContextProps> = ({ theme, children }) => {
  return (
    <StyledThemeProvider theme={(parentTheme) => buildTheme(mergeThemes(parentTheme, theme))}>
      {children}
    </StyledThemeProvider>
  );
};

ThemeContext.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
