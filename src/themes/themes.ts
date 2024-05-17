// src/themes/themes.ts
import { buildTheme } from "../utils/buildTheme/buildTheme";

export const lightTheme = {
  background: 'white',
  color: 'black',
};

export const darkTheme = {
  background: 'black',
  color: 'white',
};

export const brandedTheme = buildTheme({
  global: {
    colors: {
      gunmetal: '#31393cff',
      blueCrayola: '#2176ffff',
      celestialBlue: '#33a1fdff',
      sunglow: '#fdca40ff',
      carrotOrange: '#f79824ff',
      'light-1': '#ffffff',
      'light-2': '#f7f7f7',
      'light-3': '#efefef',
      'light-4': '#e7e7e7',
      'light-5': '#dfdfdf',
      'light-6': '#d7d7d7',
      'light-7': '#cfcfcf',
      'light-8': '#c7c7c7',
      'light-9': '#bfbfbf',
      'light-10': '#b7b7b7',
      'dark-1': '#000000',
      'dark-2': '#080808',
      'dark-3': '#101010',
      'dark-4': '#181818',
      'dark-5': '#202020',
      'dark-6': '#282828',
      'dark-7': '#303030',
      'dark-8': '#383838',
      'dark-9': '#404040',
      'dark-10': '#484848'
    },
    font: {
      family: 'Arial, sans-serif',
      size: '16px',
      weight: '400',
    },
    lineHeight: '1.5',
    spacing: {
      none: '0',
      xxsmall: '4px',
      xsmall: '8px',
      small: '16px',
      medium: '24px',
      large: '32px',
      xlarge: '40px',
      xxlarge: '48px',
    },
    border: {
      color: '#000000',
      width: '1px',
      style: 'solid',
    },
    borderRadius: {
      none: '0',
      small: '4px',
      medium: '8px',
      large: '16px',
    },
    elevation: {
      none: 'none',
      xsmall: '0 1px 2px rgba(0, 0, 0, 0.05)',
      small: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.15)',
      large: '0 8px 16px rgba(0, 0, 0, 0.2)',
      xlarge: '0 16px 32px rgba(0, 0, 0, 0.25)'
    },
    focus: {
      outline: '1px solid blue',
    }
  },
  box: {
    background: '$global.colors.light-1',
    border: {
      color: '$global.border.color',
      width: '$global.border.width',
      style: '$global.border.style',
    },
    padding: {
      xxsmall: '$global.spacing.xxsmall',
      xsmall: '$global.spacing.xsmall',
      small: '$global.spacing.small',
      medium: '$global.spacing.medium',
      large: '$global.spacing.large',
      xlarge: '$global.spacing.xlarge',
      xxlarge: '$global.spacing.xxlarge',
    },
    margin: {
      xxsmall: '$global.spacing.xxsmall',
      xsmall: '$global.spacing.xsmall',
      small: '$global.spacing.small',
      medium: '$global.spacing.medium',
      large: '$global.spacing.large',
      xlarge: '$global.spacing.xlarge',
      xxlarge: '$global.spacing.xxlarge',
    },
    borderRadius: {
      none: '$global.borderRadius.none',
      small: '$global.borderRadius.small',
      medium: '$global.borderRadius.medium',
      large: '$global.borderRadius.large',
    },
    elevation: {
      none: '$global.elevation.none',
      xsmall: '$global.elevation.xsmall',
      small: '$global.elevation.small',
      medium: '$global.elevation.medium',
      large: '$global.elevation.large',
      xlarge: '$global.elevation.xlarge'
    }
  }
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  branded: brandedTheme,
};
